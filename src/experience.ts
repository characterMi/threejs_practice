import * as THREE from "three";

/**
 * First tutorial: creating a basic scene.
 */

/* Canvas */
const canvas = document.querySelector<HTMLCanvasElement>("#webgl")!;

/* Scene */
const scene = new THREE.Scene();

/* Object */
// Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// Mesh
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/* Camera */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

/* Renderer */
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);

/**
 * Third tutorial: Animations.
 */

// let previousTime = Date.now();
const clock = new THREE.Clock();

// gsap.to(mesh.position, { x: 1, duration: 1, delay: 1 })
// gsap.to(mesh.position, { x: 0, duration: 1, delay: 2 })

const animateCube = () => {
  const { requestAnimationFrame } = window;

  // const currentTime = Date.now();

  // const deltaTime = currentTime - previousTime;

  // previousTime = currentTime;

  const elapsedTime = clock.getElapsedTime();

  // mesh.rotation.y += 0.001 * deltaTime;
  // mesh.rotation.y = elapsedTime;
  mesh.position.y = Math.sin(elapsedTime);
  mesh.position.x = Math.cos(elapsedTime);
  camera.lookAt(mesh.position);
  // mesh.rotation.y += 0.001;

  renderer.render(scene, camera);

  requestAnimationFrame(animateCube);
};

animateCube();
