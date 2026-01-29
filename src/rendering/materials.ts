import * as THREE from "three";

// Terminal green - classic CRT phosphor color
export const WIREFRAME_GREEN = 0x00ff41;

export function createWireframeMaterial(): THREE.LineBasicMaterial {
  return new THREE.LineBasicMaterial({
    color: WIREFRAME_GREEN,
    linewidth: 1, // Note: linewidth > 1 only works with WebGLRenderer on certain platforms
  });
}

export function createTestCubeGeometry(): THREE.BufferGeometry {
  const edges = new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2));
  return edges;
}
