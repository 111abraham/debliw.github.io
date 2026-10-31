"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3DCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth;
    let height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Group for object
    const objectGroup = new THREE.Group();
    scene.add(objectGroup);

    // Inner wireframe polyhedra (faceted 3D artist sculpture)
    const geometry = new THREE.IcosahedronGeometry(2.1, 1);
    
    // Wireframe material with gold accent
    const wireframeMat = new THREE.MeshStandardMaterial({
      color: 0xc5a059,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8,
    });
    const wireframeMesh = new THREE.Mesh(geometry, wireframeMat);
    objectGroup.add(wireframeMesh);

    // Inner solid core
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x141414,
      roughness: 0.1,
      metalness: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    objectGroup.add(coreMesh);

    // Outer orbiting ring
    const ringGeo = new THREE.TorusGeometry(3.2, 0.025, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x8f8670, transparent: true, opacity: 0.4 });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.5;
    objectGroup.add(ringMesh);

    // Floating particles
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12;
      positions[i + 1] = (Math.random() - 0.5) * 12;
      positions[i + 2] = (Math.random() - 0.5) * 12;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xf5f1e8,
      size: 0.035,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Ambient & Point lights
    const ambientLight = new THREE.AmbientLight(0xf5f1e8, 0.8);
    scene.add(ambientLight);

    const goldLight = new THREE.PointLight(0xc5a059, 2.5, 20);
    goldLight.position.set(4, 5, 4);
    scene.add(goldLight);

    const blueRimLight = new THREE.PointLight(0x4a6572, 1.8, 20);
    blueRimLight.position.set(-4, -3, -2);
    scene.add(blueRimLight);

    // Mouse tracking
    let targetX = 0;
    let targetY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 0.8;
      targetY = (e.clientY / innerHeight - 0.5) * 0.8;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!mount) return;
      width = mount.clientWidth;
      height = mount.clientHeight;
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
      const elapsedTime = clock.getElapsedTime();

      // Continuous slow rotation
      wireframeMesh.rotation.x = elapsedTime * 0.2;
      wireframeMesh.rotation.y = elapsedTime * 0.25;
      coreMesh.rotation.x = -elapsedTime * 0.15;
      coreMesh.rotation.y = -elapsedTime * 0.2;
      ringMesh.rotation.z = elapsedTime * 0.1;

      // Mouse Parallax Lerp
      objectGroup.rotation.y += (targetX - objectGroup.rotation.y) * 0.05;
      objectGroup.rotation.x += (targetY - objectGroup.rotation.x) * 0.05;

      // Particle floating drift
      particles.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      wireframeMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-70" />;
}
