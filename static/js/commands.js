// defining sum cool shit


/*

- Very ass coding here like i mean REALLY ASS. i will improve later

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
        } else {
            output.innerHTML = "";
            output.innerHTML += "bash: " + termInput.value + ": command not found<br>";
        }
    }
});
