import * as THREE from 'three';
import gsap from 'gsap';

const options = {
    canvas: document.getElementById('webgl'), width: 800, height: 600
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

const clock = new THREE.Clock()

const loop = () => {
    const elapsed = clock.getElapsedTime();
    // simple rotation on Y axis
    // mesh.rotation.y = clock.getElapsedTime();

    // circular movement
    // mesh.position.x = Math.cos(elapsed);
    // mesh.position.y = Math.sin(elapsed);

    // circular movement with camera pointing at the object
    // mesh.position.x = Math.cos(elapsed);
    // mesh.position.y = Math.sin(elapsed);
    // camera.lookAt(mesh.position);

    gsap.to(
        mesh.position,
        {
            duration: 1,
            delay: 1,
            x: Math.cos(elapsed),
            y: Math.sin(elapsed)
        },
    )

    renderer.render(scene, camera);

    window.requestAnimationFrame(loop);
};

loop();
