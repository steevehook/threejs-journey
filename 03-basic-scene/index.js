const THREE = window.THREE;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0xff0000});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const width = 800;
const height = 600;

const camera = new THREE.PerspectiveCamera(75, width / height);
camera.position.z = 3;
scene.add(camera);

const canvas = document.getElementById('webgl');
const renderer = new THREE.WebGLRenderer({
    canvas,
})
renderer.setSize(width, height);
renderer.render(scene, camera);
