
/**
 * @param {function} changes
 * @param {Scene} renderer
 * @param {Scene} scene
 */
export const animate = (changes, renderer, scene) => {

    requestAnimationFrame( animate );

    changes();

    debugger;

    renderer.render( scene, scene.cameras[0] );
};
