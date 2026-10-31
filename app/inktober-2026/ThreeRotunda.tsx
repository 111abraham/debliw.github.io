"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { INKTOBER_ARTWORKS, type InktoberArtwork } from "./data";
import { ArrowLeft, ArrowRight, Eye, Grid, RotateCcw, Volume2, VolumeX, X, ZoomIn, Compass } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ThreeRotunda() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedArtwork, setSelectedArtwork] = useState<InktoberArtwork | null>(null);
  const [viewMode, setViewMode] = useState<"3d" | "grid">("3d");
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [isFullscreenModal, setIsFullscreenModal] = useState(false);
  const [isLoading3D, setIsLoading3D] = useState(true);

  // Audio synthesizer ref
  const audioCtxRef = useRef<AudioContext | null>(null);
  const ambientOscRef = useRef<{ osc1: OscillatorNode; osc2: OscillatorNode; gain: GainNode } | null>(null);

  // Rotation & interaction state refs for Three.js animation loop
  const rotRef = useRef({
    targetRotation: 0,
    currentRotation: 0,
    velocity: 0,
    isDragging: false,
    startX: 0,
    lastX: 0,
    radius: 16,
    activeMeshIndex: 0,
  });

  const meshesRef = useRef<THREE.Mesh[]>([]);

  // Sound synthesis
  const toggleAudio = useCallback(() => {
    if (!isAudioEnabled) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        // Ambient chord drone
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();

        osc1.type = "sine";
        osc1.frequency.setValueAtTime(110, ctx.currentTime); // A2

        osc2.type = "sine";
        osc2.frequency.setValueAtTime(164.81, ctx.currentTime); // E3

        gain.gain.setValueAtTime(0.0001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 3);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);

        osc1.start();
        osc2.start();

        ambientOscRef.current = { osc1, osc2, gain };
        setIsAudioEnabled(true);
      } catch (e) {
        console.warn("Audio init error", e);
      }
    } else {
      if (ambientOscRef.current && audioCtxRef.current) {
        ambientOscRef.current.gain.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.5);
        setTimeout(() => {
          ambientOscRef.current?.osc1.stop();
          ambientOscRef.current?.osc2.stop();
          audioCtxRef.current?.close();
          ambientOscRef.current = null;
          audioCtxRef.current = null;
        }, 600);
      }
      setIsAudioEnabled(false);
    }
  }, [isAudioEnabled]);

  const playClickChime = useCallback(() => {
    if (!isAudioEnabled || !audioCtxRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.16);
    } catch {}
  }, [isAudioEnabled]);

  // Jump to specific artwork in 3D
  const rotateToDay = useCallback((index: number) => {
    const total = INKTOBER_ARTWORKS.length;
    const anglePerItem = (Math.PI * 2) / total;
    // Calculate target angle so this item is directly facing camera at Z+
    const targetAngle = -index * anglePerItem;
    rotRef.current.targetRotation = targetAngle;
    rotRef.current.velocity = 0;
    rotRef.current.activeMeshIndex = index;
    setActiveDayIndex(index);
    playClickChime();
  }, [playClickChime]);

  // Next / Previous helpers
  const handlePrev = useCallback(() => {
    const nextIdx = (activeDayIndex - 1 + INKTOBER_ARTWORKS.length) % INKTOBER_ARTWORKS.length;
    rotateToDay(nextIdx);
    if (selectedArtwork) {
      setSelectedArtwork(INKTOBER_ARTWORKS[nextIdx]);
    }
  }, [activeDayIndex, rotateToDay, selectedArtwork]);

  const handleNext = useCallback(() => {
    const nextIdx = (activeDayIndex + 1) % INKTOBER_ARTWORKS.length;
    rotateToDay(nextIdx);
    if (selectedArtwork) {
      setSelectedArtwork(INKTOBER_ARTWORKS[nextIdx]);
    }
  }, [activeDayIndex, rotateToDay, selectedArtwork]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") {
        setSelectedArtwork(null);
        setIsFullscreenModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Prefetch immediate neighbor images in background for instantaneous transitions
  useEffect(() => {
    const total = INKTOBER_ARTWORKS.length;
    if (total === 0) return;

    const currentIdx = selectedArtwork
      ? INKTOBER_ARTWORKS.findIndex((a) => a.id === selectedArtwork.id)
      : activeDayIndex;

    const prevIdx = (currentIdx - 1 + total) % total;
    const nextIdx = (currentIdx + 1) % total;

    const prefetch = (src: string) => {
      if (typeof window === "undefined" || !src) return;
      const img = new window.Image();
      img.src = src;
    };

    prefetch(INKTOBER_ARTWORKS[prevIdx].image);
    prefetch(INKTOBER_ARTWORKS[nextIdx].image);
  }, [activeDayIndex, selectedArtwork]);

  // Three.js Scene Setup
  useEffect(() => {
    if (viewMode !== "3d") return;
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.035);

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
    camera.position.set(0, 0, 0); // Camera at center looking slightly outward or vice versa

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Warm museum ambient lighting
    const ambientLight = new THREE.AmbientLight(0xf5f1e8, 1.2);
    scene.add(ambientLight);

    const centerLight = new THREE.PointLight(0xfff3db, 2.5, 40, 1.2);
    centerLight.position.set(0, 4, 0);
    scene.add(centerLight);

    const softFloorLight = new THREE.PointLight(0x8f8670, 1.5, 30, 1.5);
    softFloorLight.position.set(0, -6, 0);
    scene.add(softFloorLight);

    // Dynamic Dust Particles
    const particleCount = 280;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 45;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 45;
    }
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xc5a059,
      size: 0.12,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Rotunda group
    const rotundaGroup = new THREE.Group();
    scene.add(rotundaGroup);

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    const total = INKTOBER_ARTWORKS.length;
    const radius = 17.5;
    rotRef.current.radius = radius;
    const cardWidth = 3.2;
    const cardHeight = 4.2;

    const planeGeo = new THREE.PlaneGeometry(cardWidth, cardHeight);
    const borderGeo = new THREE.PlaneGeometry(cardWidth + 0.16, cardHeight + 0.16);
    const borderMat = new THREE.MeshBasicMaterial({ color: 0x1a1a1a, side: THREE.DoubleSide });

    const meshes: THREE.Mesh[] = [];

    INKTOBER_ARTWORKS.forEach((art, index) => {
      const angle = (index / total) * Math.PI * 2;
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;

      const cardGroup = new THREE.Group();
      cardGroup.position.set(x, 0, z);
      // Face toward center
      cardGroup.rotation.y = angle + Math.PI;

      // Dark elegant backing border
      const borderMesh = new THREE.Mesh(borderGeo, borderMat);
      borderMesh.position.z = -0.01;
      cardGroup.add(borderMesh);

      // Artwork Material
      const placeholderCanvas = document.createElement("canvas");
      placeholderCanvas.width = 128;
      placeholderCanvas.height = 128;
      const ctx = placeholderCanvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "#111111";
        ctx.fillRect(0, 0, 128, 128);
        ctx.fillStyle = "#8f8670";
        ctx.font = "bold 20px sans-serif";
        ctx.fillText(`DAY ${art.day}`, 30, 70);
      }
      const initialTexture = new THREE.CanvasTexture(placeholderCanvas);

      const material = new THREE.MeshStandardMaterial({
        map: initialTexture,
        roughness: 0.4,
        metalness: 0.1,
        side: THREE.FrontSide,
      });

      const cardMesh = new THREE.Mesh(planeGeo, material);
      cardMesh.userData = { index, artwork: art };
      cardGroup.add(cardMesh);
      meshes.push(cardMesh);

      // Load full texture asynchronously
      textureLoader.load(
        art.image,
        (tex) => {
          tex.colorSpace = THREE.SRGBColorSpace;
          tex.minFilter = THREE.LinearFilter;
          material.map = tex;
          material.needsUpdate = true;
          if (index === total - 1) {
            setIsLoading3D(false);
          }
        },
        undefined,
        () => {
          if (index === total - 1) setIsLoading3D(false);
        }
      );

      rotundaGroup.add(cardGroup);
    });

    meshesRef.current = meshes;

    // Raycaster for hover & click
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-100, -100);
    let hoveredMesh: THREE.Mesh | null = null;

    // Pointer Interaction Handlers
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      rotRef.current.isDragging = true;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      rotRef.current.startX = clientX;
      rotRef.current.lastX = clientX;
      rotRef.current.velocity = 0;
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;

      if (rotRef.current.isDragging) {
        const deltaX = clientX - rotRef.current.lastX;
        rotRef.current.velocity = deltaX * 0.0035;
        rotRef.current.targetRotation += rotRef.current.velocity;
        rotRef.current.lastX = clientX;
      }
    };

    const onPointerUp = (e: MouseEvent | TouchEvent) => {
      if (!rotRef.current.isDragging) return;
      rotRef.current.isDragging = false;
      const clientX = "changedTouches" in e ? e.changedTouches[0].clientX : (e as MouseEvent).clientX;
      const dragDistance = Math.abs(clientX - rotRef.current.startX);

      // If barely dragged, treat as click
      if (dragDistance < 6) {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(meshesRef.current);
        if (intersects.length > 0) {
          const hit = intersects[0].object as THREE.Mesh;
          const art = hit.userData.artwork as InktoberArtwork;
          const idx = hit.userData.index as number;
          if (art) {
            rotateToDay(idx);
            setSelectedArtwork(art);
          }
        }
      }
    };

    const onWheel = (e: WheelEvent) => {
      rotRef.current.velocity += e.deltaY * 0.00015;
      rotRef.current.targetRotation += e.deltaY * 0.0003;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);
    domElement.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("touchend", onPointerUp);
    domElement.addEventListener("wheel", onWheel, { passive: true });

    // Window Resize
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Inertial damping & smooth rotation
      if (!rotRef.current.isDragging) {
        if (autoRotate && !selectedArtwork) {
          rotRef.current.targetRotation -= delta * 0.06;
        }
        rotRef.current.velocity *= 0.94;
        rotRef.current.targetRotation += rotRef.current.velocity;
      }

      // Lerp toward target rotation
      rotRef.current.currentRotation += (rotRef.current.targetRotation - rotRef.current.currentRotation) * 0.08;
      rotundaGroup.rotation.y = rotRef.current.currentRotation;

      // Update current active card index based on rotation angle
      const angleNormalized = (-rotRef.current.currentRotation % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
      const calculatedIndex = Math.round((angleNormalized / (Math.PI * 2)) * total) % total;
      if (calculatedIndex !== rotRef.current.activeMeshIndex && !rotRef.current.isDragging) {
        rotRef.current.activeMeshIndex = calculatedIndex;
        setActiveDayIndex(calculatedIndex);
      }

      // Floating dust animation
      particles.rotation.y += delta * 0.02;
      particles.rotation.x = Math.sin(clock.elapsedTime * 0.15) * 0.05;

      // Hover Raycasting
      if (!rotRef.current.isDragging) {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(meshesRef.current);
        if (intersects.length > 0) {
          const hit = intersects[0].object as THREE.Mesh;
          if (hoveredMesh !== hit) {
            if (hoveredMesh) hoveredMesh.scale.set(1, 1, 1);
            hoveredMesh = hit;
            hoveredMesh.scale.set(1.05, 1.05, 1.05);
          }
        } else {
          if (hoveredMesh) {
            hoveredMesh.scale.set(1, 1, 1);
            hoveredMesh = null;
          }
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      domElement.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      domElement.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
      domElement.removeEventListener("wheel", onWheel);
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      planeGeo.dispose();
      borderGeo.dispose();
      borderMat.dispose();
      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
    };
  }, [viewMode, autoRotate, selectedArtwork, rotateToDay]);

  const activeArtwork = INKTOBER_ARTWORKS[activeDayIndex] || INKTOBER_ARTWORKS[0];

  return (
    <div className="relative h-screen w-full select-none overflow-hidden bg-[#050505] text-[#f5f1e8] font-sans">
      {/* Top Navigation Bar */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between border-b border-white/10 bg-[#050505]/75 px-5 py-3.5 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.25em] text-[#bdb7aa] transition hover:border-[#c5a059] hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Home</span>
          </Link>
          <div className="hidden sm:block">
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#8f8670]">
              Exhibition &bull; October 2026
            </span>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-sm font-semibold uppercase tracking-[0.4em] sm:text-base">
            Inktober 2026
          </h1>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#8f8670]">
            31 Days &bull; 31 Artworks
          </p>
        </div>

        {/* View & Audio Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            title={autoRotate ? "Pause Auto-Rotation" : "Resume Auto-Rotation"}
            className={`hidden md:flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs uppercase tracking-wider transition ${
              autoRotate ? "border-[#c5a059]/40 bg-[#c5a059]/10 text-[#f5f1e8]" : "border-white/15 bg-white/5 text-[#8f8670]"
            }`}
          >
            <RotateCcw className={`h-3 w-3 ${autoRotate ? "animate-spin" : ""}`} style={{ animationDuration: "12s" }} />
            <span className="text-[10px]">{autoRotate ? "Orbiting" : "Paused"}</span>
          </button>

          <button
            onClick={toggleAudio}
            title={isAudioEnabled ? "Mute Ambient Synth" : "Enable Ambient Synth"}
            className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs uppercase tracking-wider transition ${
              isAudioEnabled ? "border-[#c5a059] bg-[#c5a059]/20 text-[#f5f1e8]" : "border-white/15 bg-white/5 text-[#8f8670] hover:text-white"
            }`}
          >
            {isAudioEnabled ? <Volume2 className="h-3.5 w-3.5 text-[#c5a059]" /> : <VolumeX className="h-3.5 w-3.5" />}
            <span className="text-[10px] hidden sm:inline">{isAudioEnabled ? "Sound On" : "Sound"}</span>
          </button>

          <button
            onClick={() => setViewMode(viewMode === "3d" ? "grid" : "3d")}
            className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-wider text-[#d8d0c0] transition hover:border-white/30 hover:bg-white/10"
          >
            {viewMode === "3d" ? (
              <>
                <Grid className="h-3.5 w-3.5" />
                <span className="text-[10px]">Grid</span>
              </>
            ) : (
              <>
                <Compass className="h-3.5 w-3.5" />
                <span className="text-[10px]">3D View</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Loading Indicator HUD */}
      {viewMode === "3d" && isLoading3D && (
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-[#050505]/60 backdrop-blur-sm transition-opacity duration-500">
          <div className="flex flex-col items-center gap-3">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-[#c5a059]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#bdb7aa]">
              Loading 3D Rotunda...
            </span>
          </div>
        </div>
      )}

      {/* 3D Canvas View */}
      {viewMode === "3d" ? (
        <div className="relative h-full w-full">
          <div ref={containerRef} className="h-full w-full cursor-grab active:cursor-grabbing" />

          {/* Center Crosshair / Rotunda Instruction HUD */}
          <div className="pointer-events-none absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-center">
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#8f8670] drop-shadow-md">
              Drag to spin rotunda &bull; Click card to inspect
            </span>
          </div>

          {/* Active Spotlight Card Card Preview (Bottom Left) */}
          <div className="absolute bottom-6 left-6 z-20 hidden md:block max-w-sm rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md transition-all">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-[#8f8670]">
              <span>Day {activeArtwork.dayString} / 31</span>
              <span>{activeArtwork.date}</span>
            </div>
            <h2 className="mt-1 text-xl font-bold tracking-tight text-[#f5f1e8]">
              {activeArtwork.title}
            </h2>
            <p className="mt-1 line-clamp-2 text-xs text-[#bdb7aa] leading-relaxed">
              {activeArtwork.description}
            </p>
            <button
              onClick={() => setSelectedArtwork(activeArtwork)}
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs uppercase tracking-widest text-white transition hover:bg-[#c5a059] hover:text-black hover:border-[#c5a059]"
            >
              <Eye className="h-3 w-3" />
              <span>Inspect Artwork</span>
            </button>
          </div>

          {/* Day Scrubbing & Timeline Controls (Bottom Center) */}
          <div className="absolute bottom-5 right-6 z-20 flex items-center gap-3 rounded-full border border-white/10 bg-black/70 px-4 py-2 backdrop-blur-md">
            <button
              onClick={handlePrev}
              className="rounded-full p-1.5 text-[#bdb7aa] transition hover:bg-white/10 hover:text-white"
              title="Previous Artwork"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <span className="text-xs font-mono font-medium tracking-widest text-[#f5f1e8]">
              {activeArtwork.dayString} <span className="text-[#8f8670]">/ 31</span>
            </span>
            <button
              onClick={handleNext}
              className="rounded-full p-1.5 text-[#bdb7aa] transition hover:bg-white/10 hover:text-white"
              title="Next Artwork"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Grid Gallery View */
        <div className="h-full w-full overflow-y-auto px-6 pt-24 pb-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between border-b border-white/10 pb-6">
              <div>
                <span className="text-xs uppercase tracking-[0.4em] text-[#8f8670]">Complete Collection</span>
                <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#f5f1e8]">
                  Inktober 2026 Archive
                </h2>
              </div>
              <p className="mt-2 sm:mt-0 text-sm text-[#bdb7aa] max-w-md">
                31 original ink &amp; digital conceptual illustrations by Abraham Wondafrash.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {INKTOBER_ARTWORKS.map((art, idx) => (
                <div
                  key={art.id}
                  onClick={() => {
                    rotateToDay(idx);
                    setSelectedArtwork(art);
                  }}
                  className="group relative cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] p-2 transition-all duration-300 hover:border-[#c5a059]/60 hover:bg-white/[0.06] hover:scale-[1.02]"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded bg-black/60">
                    <div className="absolute inset-0 flex items-center justify-center bg-white/[0.02]">
                      <div className="h-4 w-4 animate-spin rounded-full border border-white/20 border-t-[#c5a059]" />
                    </div>
                    <Image
                      src={art.image}
                      alt={`Day ${art.day}: ${art.title}`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                      className="object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2.5 flex items-center justify-between text-[10px] uppercase tracking-wider text-[#8f8670]">
                    <span>Day {art.dayString}</span>
                    <span className="font-semibold text-[#f5f1e8] group-hover:text-[#c5a059]">
                      {art.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Selected Artwork Inspection Modal */}
      {selectedArtwork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl sm:p-8 animate-in fade-in duration-200">
          <div className="relative flex max-h-[92vh] w-full max-w-5xl flex-col lg:flex-row overflow-hidden rounded-2xl border border-white/15 bg-[#0a0a0a] shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedArtwork(null)}
              className="absolute top-4 right-4 z-20 rounded-full border border-white/15 bg-black/60 p-2 text-white/80 transition hover:bg-white hover:text-black"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left: Big Artwork Image */}
            <div className="relative flex flex-1 items-center justify-center bg-black/50 p-4 sm:p-8">
              <div className="relative h-[48vh] w-full lg:h-[76vh]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-[#c5a059]" />
                </div>
                <Image
                  src={selectedArtwork.image}
                  alt={`Day ${selectedArtwork.day}: ${selectedArtwork.title}`}
                  fill
                  priority
                  fetchPriority="high"
                  className="object-contain relative z-10"
                />
              </div>

              {/* Fullscreen Expand CTA */}
              <button
                onClick={() => setIsFullscreenModal(true)}
                className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-lg border border-white/20 bg-black/70 px-3 py-1.5 text-xs text-[#d8d0c0] backdrop-blur transition hover:text-white hover:border-white"
              >
                <ZoomIn className="h-3.5 w-3.5" />
                <span>Full Res</span>
              </button>
            </div>

            {/* Right: Curatorial Details */}
            <div className="flex w-full lg:w-96 flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 p-6 sm:p-8 bg-[#0d0d0d]">
              <div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[#8f8670]">
                  <span>Day {selectedArtwork.dayString} / 31</span>
                  <span>{selectedArtwork.date}</span>
                </div>

                <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#f5f1e8]">
                  {selectedArtwork.title}
                </h3>

                <div className="mt-2 text-xs text-[#c5a059] uppercase tracking-widest font-mono">
                  {selectedArtwork.medium}
                </div>

                <p className="mt-6 text-sm leading-relaxed text-[#bdb7aa]">
                  {selectedArtwork.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedArtwork.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-wider text-[#8f8670]"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Pagination Footer */}
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs uppercase tracking-wider text-[#bdb7aa] transition hover:bg-white/10 hover:text-white"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Prev</span>
                </button>

                <span className="text-xs font-mono text-[#8f8670]">
                  {selectedArtwork.day} OF 31
                </span>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs uppercase tracking-wider text-[#bdb7aa] transition hover:bg-white/10 hover:text-white"
                >
                  <span>Next</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ultra Fullscreen Zoom Lightbox */}
      {isFullscreenModal && selectedArtwork && (
        <div
          onClick={() => setIsFullscreenModal(false)}
          className="fixed inset-0 z-60 flex cursor-zoom-out items-center justify-center bg-black/98 p-2 sm:p-6"
        >
          <div className="relative h-[95vh] w-[95vw]">
            <Image
              src={selectedArtwork.image}
              alt={selectedArtwork.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
