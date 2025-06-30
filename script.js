let canvas = document.getElementById('fluid-canvas');
if (!canvas) {
  canvas = document.createElement('canvas');
  canvas.id = 'fluid-canvas';
  document.body.appendChild(canvas);
}

let script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/gh/PavelDoGreat/WebGL-Fluid-Simulation/script.js';
script.onload = () => {
  if (typeof initFluidSimulation === 'function') {
    startGUI = () => {}; // Disable GUI
    initFluidSimulation(canvas, {
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 512,
      VELOCITY_DISSIPATION: 0.2,
      PRESSURE: 0.8,
      PRESSURE_ITERATIONS: 20,
      CURL: 30,
      SPLAT_RADIUS: 0.25,
      SPLAT_FORCE: 6000,
      SHADING: true,
      COLORFUL: true,
      TRANSPARENT: true
    });
  }
};
document.body.appendChild(script);
