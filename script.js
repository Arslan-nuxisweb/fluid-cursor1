/* 
 * Simplified version of DedaloD / PavelDoGreat's WebGL Fluid Simulation
 * You must load real shaders and build framebuffers for full distortion
 * This JS is a placeholder to load with real shaders from /resources/shaders
 */

window.onload = () => {
  const canvas = document.querySelector('canvas');
  const gl = canvas.getContext('webgl2', { alpha: false });

  if (!gl) {
    alert('WebGL2 is not supported on this browser.');
    return;
  }

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
};
