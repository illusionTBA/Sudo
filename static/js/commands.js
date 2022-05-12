// ass coding, will be fixed later (as of right now i'm only focusing on functionality).
var termInput = document.querySelector('.termInput');
var output = document.querySelector('.termOutput');
let currentDir = '/home/runner/Sudo'
termInput.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
        if (currentDir === '/home/runner/Sudo') {
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
            case 'cd Proxy/':
              output.innerHTML = '';
              termInput.value = '';
              currentDir = '/home/runner/Sudo/Proxy';
              break;
            case 'cd Games/':
              output.innerHTML = '';
              output.innerHTML += 'there are currently no games, adding this later. -ssd';
              termInput.value = '';
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
              termInput.value = '';
          };
        } else if (currentDir === '/home/runner/Sudo/Proxy') {
          // switching to switch case later, as of right now i'm lazy and want to use if/else lol

          if (termInput.value === 'help') {
            output.innerHTML = '';
            output.innerHTML += 'proxy - proxies a url<br>';
            termInput.value = '';
          } else if (termInput.value.startsWith('proxy')) {
            // got proxy to work !!1!111!
            window.navigator.serviceWorker.register('../sw.js', {
              scope: __uv$config.prefix
            }).then(() => {
              let url = termInput.value.substring('proxy '.length);
              window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
            })
          } else if (termInput.value === 'cd ..') {
            currentDir = '/home/runner/Sudo';
          } else {
            output.innerHTML = '';
            output.innerHTML += `bash: ${termInput.value}: command not found<br>`;
            termInput.value = '';
          }
        }
    }
});
