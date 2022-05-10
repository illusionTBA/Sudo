// defining sum cool shit


/*

- Very ass coding here like i mean REALLY ASS. i will improve later on in development.

*/
const el = document.getElementById('terminal');
const move = document.getElementById('terminal__bar');
const container = document.getElementById('container');
const drag = new Draggabilly(el, {
    containment: container,
    handle: move
});
let currentDir = '/home/user/Desktop/';

var termInput = document.querySelector('.termInput');
var output = document.querySelector('.termOutput');
termInput.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
        switch (termInput.value) {
            case 'ls':
                console.log('ls');
                output.innerHTML = '';
                output.innerHTML += 'Games<br>Proxy<br>';
                termInput.value = '';
                break;
            case 'pwd':
                console.log('pwd');
                output.innerHTML = '';
                output.innerHTML += `${currentDir}<br>`;
                termInput.value = '';
                break;
            case 'cat':
                console.log('cat');
                output.innerHTML = '';
                output.innerHTML += 'cat: cat: No such file or directory<br>';
                break;
            case 'clear':
                output.innerHTML = '';
                termInput.value = '';
                break;
            case 'help':
                output.innerHTML = '';
                output.innerHTML += 'ls - list files in current directory<br>pwd - print current directory<br>cat - concatenate files and print on the standard output<br>clear - clear the terminal<br>help - print this message<br>';
                termInput.value = '';
                break;
            case 'cd':
                output.innerHTML = '';
                output.innerHTML += 'not working rn, will fix later';
                termInput.value = '';
                break;
            case 'neofetch':
                output.innerHTML = '';
                output.innerHTML += `
                <pre>
                ██████████████████  ████████   Sudo@illusions
                ██████████████████  ████████   -------------------
                ██████████████████  ████████   OS: Cumjaro Linux x86_64
                ██████████████████  ████████   Kernel: 5.10.30-1-MANCUMJARO
                ████████            ████████   Uptime: 1 day, 23 hours, 38 minutes, and 36 seconds
                ████████  ████████  ████████   Packages: to much(pacman)
                ████████  ████████  ████████   Shell: bash 5.1.8
                ████████  ████████  ████████   Terminal: cumsole
                ████████  ████████  ████████   CPU: shit cum k590-k @ idc@ghz
                ████████  ████████  ████████   Memory: 16.5G/32G
                ████████  ████████  ████████
                ████████  ████████  ████████
                ████████  ████████  ████████
                ████████  ████████  ████████
                </pre>`;
                break;
            default:
                output.innerHTML = '';
                output.innerHTML += `bash: ${termInput.value}: command not found<br>`;
        }
    }
});
