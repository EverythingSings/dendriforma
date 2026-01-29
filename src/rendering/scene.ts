import * as THREE from "three";

export interface SceneContext {
  readonly scene: THREE.Scene;
  readonly camera: THREE.OrthographicCamera;
  readonly renderer: THREE.WebGLRenderer;
}

export function createScene(): SceneContext {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0a0a);

  const aspect = window.innerWidth / window.innerHeight;
  const frustumSize = 10;
  const camera = new THREE.OrthographicCamera(
    (frustumSize * aspect) / -2,
    (frustumSize * aspect) / 2,
    frustumSize / 2,
    frustumSize / -2,
    0.1,
    1000
  );
  camera.position.set(0, 0, 10);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: false });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(1); // Crisp pixels, no subpixel smoothing
  document.body.appendChild(renderer.domElement);

  return { scene, camera, renderer };
}

export function handleResize(context: SceneContext): void {
  const { camera, renderer } = context;
  const aspect = window.innerWidth / window.innerHeight;
  const frustumSize = 10;

  camera.left = (frustumSize * aspect) / -2;
  camera.right = (frustumSize * aspect) / 2;
  camera.top = frustumSize / 2;
  camera.bottom = frustumSize / -2;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

export function render(context: SceneContext): void {
  context.renderer.render(context.scene, context.camera);
}
