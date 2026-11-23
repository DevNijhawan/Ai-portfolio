"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface Global3DSpaceProps {
  isLightTheme?: boolean;
}

export function Global3DSpace({ isLightTheme = false }: Global3DSpaceProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();

    let width = window.innerWidth;
    let height = window.innerHeight;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 32);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, isLightTheme ? 0.8 : 0.4);
    scene.add(ambientLight);

    const pointLightPurple = new THREE.PointLight(0xa855f7, 2.5, 80);
    pointLightPurple.position.set(15, 20, 15);
    scene.add(pointLightPurple);

    const pointLightGreen = new THREE.PointLight(0x00ff66, 2.0, 80);
    pointLightGreen.position.set(-15, -10, 15);
    scene.add(pointLightGreen);

    const pointLightSkyBlue = new THREE.PointLight(0x38bdf8, 1.8, 80);
    pointLightSkyBlue.position.set(0, -25, 20);
    scene.add(pointLightSkyBlue);

    // 3. 3D Floating Voxel Field (Obsidian, Emerald, Amethyst, Sky Blue, Orange)
    const voxelGroup = new THREE.Group();
    scene.add(voxelGroup);

    const voxelGeo = new THREE.BoxGeometry(1.2, 1.2, 1.2);
    const voxelEdges = new THREE.EdgesGeometry(voxelGeo);

    const materials = [
      // Emerald Voxel
      {
        mesh: new THREE.MeshStandardMaterial({
          color: isLightTheme ? 0xd1fae5 : 0x032210,
          roughness: 0.3,
          metalness: 0.7,
        }),
        edge: new THREE.LineBasicMaterial({ color: 0x00ff66 }),
      },
      // Amethyst Voxel
      {
        mesh: new THREE.MeshStandardMaterial({
          color: isLightTheme ? 0xf3e8ff : 0x1f0d38,
          roughness: 0.2,
          metalness: 0.8,
        }),
        edge: new THREE.LineBasicMaterial({ color: 0xc084fc }),
      },
      // Sky Blue Voxel (GTA theme)
      {
        mesh: new THREE.MeshStandardMaterial({
          color: isLightTheme ? 0xe0f2fe : 0x061e38,
          roughness: 0.2,
          metalness: 0.8,
        }),
        edge: new THREE.LineBasicMaterial({ color: 0x38bdf8 }),
      },
      // Fiery Orange Voxel (Anime theme)
      {
        mesh: new THREE.MeshStandardMaterial({
          color: isLightTheme ? 0xffedd5 : 0x381204,
          roughness: 0.3,
          metalness: 0.7,
        }),
        edge: new THREE.LineBasicMaterial({ color: 0xff7700 }),
      },
      // Obsidian Void Voxel
      {
        mesh: new THREE.MeshStandardMaterial({
          color: isLightTheme ? 0xffffff : 0x090514,
          roughness: 0.1,
          metalness: 0.9,
        }),
        edge: new THREE.LineBasicMaterial({ color: isLightTheme ? 0x94a3b8 : 0x581c87 }),
      },
    ];

    interface VoxelItem {
      mesh: THREE.Mesh;
      baseX: number;
      baseY: number;
      baseZ: number;
      rotSpeedX: number;
      rotSpeedY: number;
      floatSpeed: number;
      floatOffset: number;
    }

    const voxelItems: VoxelItem[] = [];
    const voxelCount = 38;

    for (let i = 0; i < voxelCount; i++) {
      const matConfig = materials[i % materials.length];
      const mesh = new THREE.Mesh(voxelGeo, matConfig.mesh);
      const wireframe = new THREE.LineSegments(voxelEdges, matConfig.edge);
      mesh.add(wireframe);

      // Random scale variance
      const scale = 0.5 + Math.random() * 0.9;
      mesh.scale.set(scale, scale, scale);

      // Distribute across tall 3D space matching page scroll length
      const x = (Math.random() - 0.5) * 55;
      const y = (Math.random() - 0.5) * 85;
      const z = -20 + Math.random() * 35;

      mesh.position.set(x, y, z);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);

      voxelGroup.add(mesh);

      voxelItems.push({
        mesh,
        baseX: x,
        baseY: y,
        baseZ: z,
        rotSpeedX: (Math.random() - 0.5) * 0.015,
        rotSpeedY: (Math.random() - 0.5) * 0.015,
        floatSpeed: 0.8 + Math.random() * 1.5,
        floatOffset: Math.random() * Math.PI * 2,
      });
    }

    // 4. Undulating 3D Cyber Wireframe Grid Floor
    const gridSegments = 32;
    const gridGeo = new THREE.PlaneGeometry(90, 90, gridSegments, gridSegments);
    const gridMat = new THREE.MeshBasicMaterial({
      color: isLightTheme ? 0x315efb : 0x7c3aed,
      wireframe: true,
      transparent: true,
      opacity: isLightTheme ? 0.08 : 0.18,
    });
    const gridMesh = new THREE.Mesh(gridGeo, gridMat);
    gridMesh.rotation.x = -Math.PI / 2.2;
    gridMesh.position.y = -22;
    gridMesh.position.z = -5;
    scene.add(gridMesh);

    // Store original grid positions for wave calculations
    const posAttr = gridGeo.attributes.position;
    const originalZ = new Float32Array(posAttr.count);
    for (let i = 0; i < posAttr.count; i++) {
      originalZ[i] = posAttr.getZ(i);
    }

    // 5. Dynamic Orbiting Cyber Rings (Large Holographic Ring)
    const ringGeo = new THREE.RingGeometry(18, 18.3, 64);
    const ringMat = new THREE.LineBasicMaterial({
      color: isLightTheme ? 0x315efb : 0x00ff66,
      transparent: true,
      opacity: 0.25,
    });
    const cyberRing = new THREE.LineLoop(ringGeo, ringMat);
    cyberRing.rotation.x = Math.PI / 3;
    cyberRing.position.set(10, 5, -15);
    scene.add(cyberRing);

    // 6. Interactive Mouse & Scroll Tracking
    let targetCameraY = 0;
    let targetCameraX = 0;
    let currentCameraY = 0;
    let currentCameraX = 0;
    let scrollProgress = 0;

    const onMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetCameraX = normX * 3.5;
    };

    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        scrollProgress = window.scrollY / maxScroll;
        // Travel down through 3D space with camera as page scrolls
        targetCameraY = -scrollProgress * 55;
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initialize

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", onResize);

    // 7. Render Loop
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth camera interpolation (lerp)
      if (!prefersReducedMotion) {
        currentCameraX += (targetCameraX - currentCameraX) * 0.05;
        currentCameraY += (targetCameraY - currentCameraY) * 0.04;

        camera.position.x = currentCameraX;
        camera.position.y = currentCameraY;
        camera.lookAt(currentCameraX * 0.3, currentCameraY - 2, 0);

        // Animate floating voxels
        voxelItems.forEach((v) => {
          v.mesh.rotation.x += v.rotSpeedX;
          v.mesh.rotation.y += v.rotSpeedY;
          v.mesh.position.y = v.baseY + Math.sin(elapsedTime * v.floatSpeed + v.floatOffset) * 1.5;
        });

        // Animate grid wave vertices
        for (let i = 0; i < posAttr.count; i++) {
          const u = posAttr.getX(i);
          const v = posAttr.getY(i);
          const wave =
            Math.sin(elapsedTime * 1.2 + u * 0.15) * 1.2 +
            Math.cos(elapsedTime * 0.8 + v * 0.12) * 1.0;
          posAttr.setZ(i, originalZ[i] + wave);
        }
        posAttr.needsUpdate = true;

        // Rotate cyber ring
        cyberRing.rotation.z += 0.003;

        // Move light positions slightly
        pointLightPurple.position.x = 15 + Math.sin(elapsedTime * 0.5) * 8;
        pointLightGreen.position.y = -10 + Math.cos(elapsedTime * 0.6) * 8;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 8. Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      voxelGeo.dispose();
      voxelEdges.dispose();
      gridGeo.dispose();
      gridMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, [isLightTheme]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: isLightTheme ? 0.65 : 0.95 }}
      aria-hidden="true"
    />
  );
}
