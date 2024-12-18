import * as THREE from "three";

// Сцена
const scene = new THREE.Scene();

const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

// Объект
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "purple",
  wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Камера
const sizes = {
  width: 600,
  height: 600,
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.y = 1;

scene.add(camera);

const canvas = document.querySelector(".canvas");

const renderer = new THREE.WebGLRenderer({ canvas });

mesh.scale.x = 0.5;
mesh.scale.y = 2;
mesh.scale.z = -0.7;

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
