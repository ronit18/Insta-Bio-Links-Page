import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// initialisation
const canvas = document.querySelector("#canvas");
const scene = new THREE.Scene();
scene.background = new THREE.Color("rgb(10, 14, 22)");
const camera = new THREE.PerspectiveCamera(
	50,
	window.innerWidth / (window.innerHeight * 0.8),
	0.1,
	50
);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
});

renderer.setSize(window.innerWidth, window.innerHeight * 0.8);

// sphere
const geometry = new THREE.SphereBufferGeometry(4, 12, 8);
const material = new THREE.MeshStandardMaterial({
	color: 0xaaaa9b,
	wireframe: true,
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// twitter
const twitter = new THREE.Group();
twitter.add(
	new THREE.Mesh(
		new THREE.SphereBufferGeometry(0.1, 10, 10),
		new THREE.MeshStandardMaterial({ color: 0x37a9e1 })
	),
	new THREE.PointLight(0x37a9e1)
);

scene.add(twitter);

// linkedIn
const linkedIn = new THREE.Group();
linkedIn.add(
	new THREE.Mesh(
		new THREE.SphereBufferGeometry(0.1, 10, 10),
		new THREE.MeshStandardMaterial({ color: "#FFE817" })
	),
	new THREE.PointLight("#FFE817")
);

scene.add(linkedIn);

// github
const github = new THREE.Group();
github.add(
	new THREE.Mesh(
		new THREE.SphereBufferGeometry(0.1, 10, 10),
		new THREE.MeshStandardMaterial({ color: "#7F3FF1" })
	),
	new THREE.PointLight("#7F3FF1")
);
scene.add(github);

// homepage
const homepage = new THREE.Group();
homepage.add(
	new THREE.Mesh(
		new THREE.SphereBufferGeometry(0.1, 10, 10),
		new THREE.MeshStandardMaterial({ color: "#d7e4f7" })
	),
	new THREE.PointLight("#d7e4f7")
);

scene.add(homepage);

// insta
const insta = new THREE.Group();
insta.add(
	new THREE.Mesh(
		new THREE.SphereBufferGeometry(0.1, 10, 10),
		new THREE.MeshStandardMaterial({ color: "#FF0161" })
	),
	new THREE.PointLight("#FF0161")
);

scene.add(insta);

// light
const pointLight = new THREE.PointLight(0xaaaa9b);
pointLight.position.set(0, 5, 9);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(pointLight, ambientLight);

// controles
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = true;
controls.enableRotate = true;
controls.rotateSpeed = 1;

window.addEventListener("resize", onWindowResize);

function onWindowResize() {
	camera.aspect = window.innerWidth / (window.innerHeight * 1);
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight * 1);
}

// animation
let clock = new THREE.Clock();

function animate() {
	requestAnimationFrame(animate);

	let elapsedTime = clock.getElapsedTime();
	let angle = elapsedTime * 1.5;

	twitter.position.x = 4.5 * Math.cos(angle);
	twitter.position.y = 4 * Math.sin(angle);
	twitter.position.z = Math.cos(angle);

	linkedIn.position.x = 5 * Math.cos(angle);
	linkedIn.position.z = 4.3 * Math.sin(angle);
	linkedIn.position.y = 2 * Math.sin(-0.2 * angle);

	github.position.y = 2.8 * Math.cos(angle);
	github.position.z = 2.8 * Math.sin(angle);

	homepage.position.y = -4.8 * Math.cos(angle);
	homepage.position.z = -4.8 * Math.sin(angle);
	homepage.position.y = 3 * Math.sin(-0.2 * angle);

	insta.position.x = -5 * Math.cos(angle);
	insta.position.y = -4.5 * Math.sin(angle);
	insta.position.z = -Math.sin(0.1 * angle);

	sphere.rotation.x += 0.007;
	sphere.rotation.y += 0.007;

	controls.update();
	renderer.render(scene, camera);
}

animate();
