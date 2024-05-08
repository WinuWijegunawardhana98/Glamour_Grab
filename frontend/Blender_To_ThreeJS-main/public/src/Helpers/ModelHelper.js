import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; // Adjust the path to GLTFLoader.js

const scenePath = '/public/Assets/scene.gltf';

export const LoadGLTFByPath = (scene) => {
    return new Promise((resolve, reject) => {
        if (!scene) {
            reject(new Error('Invalid scene parameter'));
            return;
        }

        // Create a loader
        const loader = new GLTFLoader();

        // Load the GLTF file
        loader.load(scenePath, (gltf) => {
            if (gltf.scene) {
                scene.add(gltf.scene);
                resolve();
            } else {
                reject(new Error('Loaded GLTF does not contain a scene'));
            }
        }, undefined, (error) => {
            reject(error);
        });
    });
};
