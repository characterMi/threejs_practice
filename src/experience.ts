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
// scene.add(mesh);

/* Camera */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(0, 0, 3);
scene.add(camera);

/* Renderer */
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);

/**
 * Second tutorial: Transform Objects.
 */

// Position
// mesh.position.y = -0.6;
// mesh.position.x = 0.7;
// mesh.position.z = -2;
mesh.position.set(0.7, -0.6, -2);

// mesh.position.normalize();

// console.log(mesh.position.length());

// Axes Helper
const axesHelper = new THREE.AxesHelper(3);
// This is an object, so we should add it to scene
scene.add(axesHelper);
// console.log(mesh.position.distanceTo(camera.position));

// Scale
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
mesh.scale.set(2, 0.5, 0.5);

// Rotation
// mesh.rotation.reorder("YXZ");
// mesh.rotation.y = Math.PI * 0.25;
// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.z = Math.PI * 0.25;
// mesh.rotation.set(2, 0.5, 0.5);

// Quaternion
// mesh.quaternion.x = 2;
// mesh.quaternion.y = 2;
// mesh.quaternion.z = 2;

// Look at
// camera.lookAt(mesh.position);

// Group
const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

cube1.position.x = -1;

group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);

cube2.position.x = 0;

group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);

cube3.position.x = 1;

group.add(cube3);

group.scale.z = 0;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// We can't transform our mesh after rendering the scene. it's like a picture, u can move before someone take a picture of u and it's gonna affect the picture, but if u move after taking the picture, nothing will change, cause it has been already taken.
renderer.render(scene, camera);
