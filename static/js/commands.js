// defining sum cool shit


/*

- Very ass coding here like i mean REALLY ASS. i will improve later on in development.

*/



var termInput = document.querySelector(".termInput");
var output = document.querySelector(".termOutput");
termInput.addEventListener("keyup", function (event) {
    if (event.code === 'Enter') {
        if (termInput.value == "ls") {
            console.log("ls");
            output.innerHTML = "";
            output.innerHTML += "Games/<br>Proxy/<br>Browser/<br>";
            termInput.value = "";
        } else if (termInput.value == "pwd") {
            console.log("pwd");
            output.innerHTML = "";
            output.innerHTML += "/home/user/Desktop/";
            termInput.value = "";

        } else if (termInput.value == "cat") {
            console.log("cat");
            output.innerHTML = "";
            output.innerHTML += "cat: cat: No such file or directory<br>";
            termInput.value = "";

        } else if (termInput.value == "clear") {
            output.innerHTML = "";
            termInput.value = "";
        } else if (termInput.value == "help") {
            output.innerHTML = "ls - list files in current directory<br>pwd - print current directory<br>cat - concatenate files and print on the standard output<br>clear - clear the terminal<br>help - print this message";
            termInput.value = "";

        } // else if terminput = "cd {path}"
        else if (termInput.value.includes("cd")) {
            output.innerHTML = "";
            output.innerHTML += "cd: no such file or directory: " + termInput.value.substring(3) + "<br>";
            termInput.value = "";
        } // else if input = "proxy {url}" send them to a url
        else if (termInput.value.includes("proxy")) {
            if (termInput.value.includes("https://")) {
                output.innerHTML = termInput.value.substring(8);
            } else if (termInput.value.includes("http://")) {
                var url = termInput.value.substring(8);
                output.innerHTML = url;
            } else {
                output.innerHTML = "";
                output.innerHTML += "proxy: invalid url: " + termInput.value.substring(7) + "<br>";
                termInput.value = "";
            }
        } else if (termInput.value == "neofetch") {
            output.innerHTML = "";
            output.innerHTML += ` <pre>
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
        } else {
            output.innerHTML = "";
            output.innerHTML += "bash: " + termInput.value + ": command not found<br>";
        }
    }
});
