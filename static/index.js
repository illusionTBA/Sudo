const terminal = document.getElementById('terminal');
const move = document.getElementById('terminal__bar');
const container = document.getElementById('container');

const drag = new Draggabilly(terminal, {
    containment: container,
    handle: move
});