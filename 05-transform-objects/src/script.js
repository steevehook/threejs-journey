import * as THREE from 'three';

const options = {
    canvas: document.getElementById('webgl'), width: 800, height: 600
}

const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0xff0000})

/* MESH */
const mesh = new THREE.Mesh(geometry, material);
// POSITION
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
// mesh.position.set(0.7, -0.6, 1);

// LENGTH
// console.log(mesh.position.length()); // length = sqrt(x^2 + y^2 + z^2)
// mesh.position.set(0.7, -0.6, 1); // set the position
// console.log(mesh.position.length()) // 1.3601470508735443
// mesh.position.normalize(); // will normalize the vector to length 1 => (x: 1, y: 1, z: 1)
// console.log(mesh.position.length()) // 1

// SCALE
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;

// ROTATION
mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.25;
mesh.rotation.z = Math.PI;
/* MESH */

const camera = new THREE.PerspectiveCamera(75, options.width / options.height);
camera.position.z = 3;
// console.log(mesh.position.distanceTo(camera.position)); // matches the camera z position
// camera.lookAt(new THREE.Vector3(.5, -1, -5));
camera.lookAt(mesh.position);

/* HELPERS */
const axesHelper = new THREE.AxesHelper(2);
// axesHelper.position.x = 0.2;
// axesHelper.position.y = -0.2;
/* HELPERS */

/* GROUP */
const group = new THREE.Group();
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)
cube1.position.x = -1.5;
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
)
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0x0000ff})
)
cube3.position.x = 1.5;
group.add(cube1, cube2, cube3);
group.scale.set(0.5, 0.5, 0.5);
group.position.y = 1.5;

scene.add(camera, mesh, axesHelper, group);

const renderer = new THREE.WebGLRenderer({
    canvas: options.canvas,
})
renderer.setSize(options.width, options.height);
renderer.render(scene, camera);
