import {AmbientLight, Color, PerspectiveCamera, Scene, SpotLight, WebGLRenderer} from "three";

const createLights = () => {
    const light = new SpotLight( 0xffffff, 1.5 );
    light.position.set( 0, 500, 2000 );
    light.angle = Math.PI / 9;

    light.castShadow = true;
    light.shadow.camera.near = 1000;
    light.shadow.camera.far = 4000;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;

    return [
        new AmbientLight( 0x505050 ),
        light,
    ]
}

const createCamera = () => {
    const camera = new PerspectiveCamera( 70, node.innerWidth / node.innerHeight, 1, 5000 );
    camera.position.z = 1000;
}

export async function createScene(node) {
    const scene = new Scene();
    scene.background = new Color(0xf0f0f0);

    const renderer = new WebGLRenderer();
    renderer.setSize(node.innerWidth, node.innerHeight);
    node.appendChild(renderer.domElement);

    createLights().forEach(light => scene.add(light));

    return {renderer, scene};
}

