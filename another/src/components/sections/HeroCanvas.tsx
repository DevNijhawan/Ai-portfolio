"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Scene & Camera setup
    const scene = new THREE.Scene();

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(4, 3, 5); // Isometric angle
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 2. 3D Voxel Monolith Cluster (Obsidian, Crying Obsidian, and Neon Emerald Voxels)
    const voxelBoxGeo = new THREE.BoxGeometry(0.7, 0.7, 0.7);

    const obsidianMat = new THREE.MeshBasicMaterial({ color: 0x0f0a1d });
    const cryingObsidianMat = new THREE.MeshBasicMaterial({ color: 0x1f0d38 });
    const emeraldVoxelMat = new THREE.MeshBasicMaterial({ color: 0x062818 }); // Deep emerald block
    const amethystCoreMat = new THREE.MeshBasicMaterial({ color: 0xa855f7 });

    const edgePurpleMat = new THREE.LineBasicMaterial({ color: 0xc084fc });
    const edgeMagentaMat = new THREE.LineBasicMaterial({ color: 0xd946ef });
    const edgeNeonGreenMat = new THREE.LineBasicMaterial({ color: 0x00ff66 }); // Electric Neon Green edge

    const voxelEdgesGeo = new THREE.EdgesGeometry(voxelBoxGeo);

    const cluster = new THREE.Group();
    const positions = [
      [-0.75, -0.75, -0.75], [0.75, -0.75, -0.75], [-0.75, 0.75, -0.75], [0.75, 0.75, -0.75],
      [-0.75, -0.75, 0.75], [0.75, -0.75, 0.75], [-0.75, 0.75, 0.75], [0.75, 0.75, 0.75],
      [0, 0.85, 0], [0, -0.85, 0], [0.85, 0, 0], [-0.85, 0, 0], [0, 0, 0.85], [0, 0, -0.85]
    ];

    positions.forEach((pos, idx) => {
      let blockMat = obsidianMat;
      let edgeMat = edgePurpleMat;

      if (idx % 3 === 0) {
        blockMat = emeraldVoxelMat;
        edgeMat = edgeNeonGreenMat; // Radiant Neon Green edges
      } else if (idx % 2 === 0) {
        blockMat = cryingObsidianMat;
        edgeMat = edgeMagentaMat;
      }

      const mesh = new THREE.Mesh(voxelBoxGeo, blockMat);
      mesh.position.set(pos[0], pos[1], pos[2]);

      const wireframe = new THREE.LineSegments(voxelEdgesGeo, edgeMat);
      mesh.add(wireframe);
      cluster.add(mesh);
    });

    // Central Glowing Voxel Heart (Amethyst / Emerald Matrix Core)
    const heartGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const heartEdges = new THREE.EdgesGeometry(heartGeo);
    const heartMesh = new THREE.Mesh(heartGeo, amethystCoreMat);
    const heartWire = new THREE.LineSegments(heartEdges, new THREE.LineBasicMaterial({ color: 0x00ff66 }));
    heartMesh.add(heartWire);
    cluster.add(heartMesh);

    mainGroup.add(cluster);

    // 3. Orbiting Cyber Rings: Electric Purple & Neon Green
    const ringGeo = new THREE.RingGeometry(2.1, 2.15, 32);
    const ringMat = new THREE.LineBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.6,
    });
    const ring = new THREE.LineLoop(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.3;
    mainGroup.add(ring);

    // Radiant Neon Green Cyber Ring
    const ring2Geo = new THREE.RingGeometry(2.35, 2.4, 32);
    const ring2Mat = new THREE.LineBasicMaterial({
      color: 0x00ff66, // Electric Neon Green
      transparent: true,
      opacity: 0.65,
    });
    const ring2 = new THREE.LineLoop(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 1.7;
    ring2.rotation.y = Math.PI / 4;
    mainGroup.add(ring2);

    // 4. Floating Minecraft Voxel Particles (Neon Green & Lavender Pixels)
    const particleCount = 75;
    const particleGroup = new THREE.Group();
    const particleBoxGeo = new THREE.BoxGeometry(0.065, 0.065, 0.065);

    const particleMatPurple = new THREE.MeshBasicMaterial({ color: 0xc084fc });
    const particleMatNeonGreen = new THREE.MeshBasicMaterial({ color: 0x00ff66 }); // Glowing Green XP Pixel

    for (let i = 0; i < particleCount; i++) {
      const mat = i % 2 === 0 ? particleMatNeonGreen : particleMatPurple;
      const p = new THREE.Mesh(particleBoxGeo, mat);
      p.position.set(
        (Math.random() - 0.5) * 6.5,
        (Math.random() - 0.5) * 6.5,
        (Math.random() - 0.5) * 5.5
      );
      p.rotation.set(Math.random(), Math.random(), Math.random());
      particleGroup.add(p);
    }
    mainGroup.add(particleGroup);

    // 5. Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 0.9;
      targetY = (y / rect.height) * 0.9;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // 6. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        cluster.rotation.y = elapsedTime * 0.3 + mouseX;
        cluster.rotation.x = Math.sin(elapsedTime * 0.2) * 0.2 - mouseY;

        const scale = 1 + Math.sin(elapsedTime * 2.8) * 0.16;
        heartMesh.scale.set(scale, scale, scale);
        heartMesh.rotation.y = -elapsedTime * 0.8;
        heartMesh.rotation.z = elapsedTime * 0.6;

        ring.rotation.z = elapsedTime * 0.45;
        ring2.rotation.z = -elapsedTime * 0.4;

        particleGroup.rotation.y = elapsedTime * 0.1;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      voxelBoxGeo.dispose();
      voxelEdgesGeo.dispose();
      obsidianMat.dispose();
      cryingObsidianMat.dispose();
      emeraldVoxelMat.dispose();
      amethystCoreMat.dispose();
      edgePurpleMat.dispose();
      edgeMagentaMat.dispose();
      edgeNeonGreenMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleBoxGeo.dispose();
      particleMatPurple.dispose();
      particleMatNeonGreen.dispose();
      renderer.dispose();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] relative flex items-center justify-center pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Minecraft x Hacker HUD Badge with Neon Green & Purple */}
      <div className="absolute bottom-4 right-4 pointer-events-auto bg-[#0A0716]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#00FF66]/40 shadow-[0_0_15px_rgba(0,255,102,0.25)] text-[11px] font-mono text-emerald-300 flex items-center gap-2">
        <span className="w-2 h-2 rounded-sm bg-[#00FF66] animate-pulse shadow-[0_0_8px_#00FF66]" />
        <span>VOXEL_NETHERITE // EMERALD_CORE</span>
      </div>
    </div>
  );
}
