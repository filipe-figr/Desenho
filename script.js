document.addEventListener('DOMContentLoaded', function () {
  var canvasContainer = document.getElementById('canvas-container');
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var isDrawing = false;

  canvas.width = canvasContainer.clientWidth;
  canvas.height = canvasContainer.clientHeight;

  canvas.addEventListener('mousedown', function (e) {
    if (e.button === 0) { // Botão esquerdo do mouse
      isDrawing = true;
      context.beginPath();
      context.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
    } else if (e.button === 2) { // Botão direito do mouse
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  });

  canvas.addEventListener('mousemove', function (e) {
    if (isDrawing) {
      context.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
      context.stroke();
    }
  });

  canvas.addEventListener('mouseup', function () {
    isDrawing = false;
  });

  canvas.addEventListener('mouseout', function () {
    isDrawing = false;
  });

  canvas.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
});