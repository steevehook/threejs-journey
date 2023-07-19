import * as THREE from 'three';
import {OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const options = {
    canvas: document.getElementById('webgl'),
    width: 800,
    height: 600
}

// The scene is where you place objects, lights and cameras
const scene = new THREE.Scene();

// The geometry is the shape of the object
const geometry = new THREE.BoxGeometry(1, 1, 1, 5, 5, 5);
// The material is the color or texture of the object
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
// The mesh is the combination of the geometry and the material
const mesh = new THREE.Mesh(geometry, material);

// PERSPECTIVE CAMERA with default near and far
// The camera is the point of view of the scene
const camera = new THREE.PerspectiveCamera(75, options.width / options.height);

// PERSPECTIVE CAMERA with near and far
// const camera = new THREE.PerspectiveCamera(
//     75,
//     options.width / options.height,
//     1,
//     10,
// );
// camera.position.z = 3; // objects will be rendered just fine
// camera.position.z = 11; // objects will not be rendered if they are outside [near, far]

// ORTHOGRAPHIC CAMERA
// const aspectRatio = options.width / options.height;
// const camera = new THREE.OrthographicCamera(-aspectRatio, aspectRatio, 1, -1, 0.1, 100)

// Positioning the camera
camera.position.z = 3;
// camera.position.x = 2;
// camera.position.y = 2;
// camera.position.z = 2;
camera.lookAt(mesh.position);

// Adding all the elements to the scene
scene.add(mesh, camera);

// Controls
const controls = new OrbitControls(camera, options.canvas);
controls.enableDamping = true;
// controls.target.y = 2;

// The renderer is what draws the scene
const renderer = new THREE.WebGLRenderer({
    canvas: options.canvas,
})
renderer.setSize(options.width, options.height);
renderer.render(scene, camera);

const clock = new THREE.Clock()

const cursor = {
    x: 0,
    y: 0,
}
window.addEventListener('mousemove', event => {
    cursor.x = event.clientX / options.width - 0.5;
    cursor.y = event.clientY / options.height - 0.5;
});

const revolution = Math.PI * 2
const loop = () => {
    // mesh.rotation.y = clock.getElapsedTime();

    // camera.position.x = Math.sin(cursor.x * revolution) * 2;
    // camera.position.z = Math.cos(cursor.x * revolution) * 2;
    // camera.position.y = -cursor.y * 3;
    // camera.lookAt(mesh.position);

    controls.update();

    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
};

loop();
