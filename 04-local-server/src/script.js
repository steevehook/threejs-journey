import * as THREE from 'three';

const options = {
    canvas: document.getElementById('webgl'),
    width: 800,
    height: 600
}

// The scene is where you place objects, lights and cameras
const scene = new THREE.Scene();

// The geometry is the shape of the object
const geometry = new THREE.BoxGeometry(1, 1, 1);
// The material is the color or texture of the object
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
// The mesh is the combination of the geometry and the material
const mesh = new THREE.Mesh(geometry, material);

// The camera is the point of view of the scene
const camera = new THREE.PerspectiveCamera(75, options.width / options.height);
camera.position.z = 3;

// Adding all the elements to the scene
scene.add(mesh, camera);

// The renderer is what draws the scene
const renderer = new THREE.WebGLRenderer({
    canvas: options.canvas,
})
renderer.setSize(options.width, options.height);
renderer.render(scene, camera);
