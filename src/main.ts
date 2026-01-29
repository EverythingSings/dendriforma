import * as THREE from "three";
import { createScene, handleResize, render, SceneContext } from "@rendering/scene";
import { createWireframeMaterial, createTestCubeGeometry } from "@rendering/materials";

function createTestObject(scene: THREE.Scene): THREE.LineSegments {
  const geometry = createTestCubeGeometry();
  const material = createWireframeMaterial();
  const cube = new THREE.LineSegments(geometry, material);
  scene.add(cube);
  return cube;
}

function animate(context: SceneContext, testObject: THREE.LineSegments): void {
  function loop(): void {
    requestAnimationFrame(loop);

    // Slow rotation to show 3D structure
    testObject.rotation.x += 0.005;
    testObject.rotation.y += 0.007;

    render(context);
  }
  loop();
}

function main(): void {
  const context = createScene();
  const testObject = createTestObject(context.scene);

  window.addEventListener("resize", () => handleResize(context));

  animate(context, testObject);
}

main();
