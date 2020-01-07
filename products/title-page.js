let piano = document.getElementById('container');

const a = new Audio('../sounds/a.wav');
const bFlat = new Audio('../sounds/b-flat.wav');
const b = new Audio('../sounds/b.wav');
const c = new Audio('../sounds/c.wav');
const cSharp = new Audio('../sounds/c-sharp.wav');
const d = new Audio('../sounds/d.wav');
const eFlat = new Audio('../sounds/e-flat.wav');
const e = new Audio('../sounds/e.wav');
const f = new Audio('../sounds/f.wav');
const fSharp = new Audio('../sounds/f-sharp.wav');
const g = new Audio('../sounds/g.wav');
const gSharp = new Audio('../sounds/g-sharp.wav');

const sounds = [gSharp, a, bFlat, b, c, cSharp, d, eFlat, e, f, fSharp, g];

for (let i = 0; i < sounds.length; i++) {
    let key = document.createElement('div');
    const note = sounds[i];

    key.addEventListener('mouseover', function() {
        note.play();
        setTimeout(function() {
            note.pause();
            note.currentTime = 0;
        }, 500);
    });

    if (note === gSharp || note === bFlat || note === cSharp || note === eFlat || note === fSharp) {
        key.style.position = 'absolute';
        key.style.width = '50px';
        key.style.height = '120px';
        key.classList.add('black-key');
    } else {
        key.classList.add('key');
    }
    if (note === gSharp) {
        key.style.left = '-23px';
    }
    if (note === bFlat) {
        key.style.left = '61px';
    }
    if (note === cSharp) {
        key.style.left = '231px';
    }
    if (note === eFlat) {
        key.style.left = '317px';
    }
    if (note === fSharp) {
        key.style.left = '489px';
    }
    piano.appendChild(key);
}
