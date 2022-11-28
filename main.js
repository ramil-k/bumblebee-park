import { 
  Scene, 
  PerspectiveCamera, 
  WebGLRenderer, 
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  AmbientLight,
  Color,
  SpotLight,
} from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {createScene} from "./src/scene.js";

(async () => {
  const {renderer, scene} = await createScene(document.body);

  const loader = new GLTFLoader();

  const gltf = await new Promise((resolve, reject) => loader.load('bumblebee.gltf', resolve, null, reject));

  scene.add( gltf.scene );

})()

