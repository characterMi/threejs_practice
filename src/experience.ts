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

renderer.render(scene, camera);
