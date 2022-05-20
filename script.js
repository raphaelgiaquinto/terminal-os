var command = document.getElementById("command");

command.focus();

var terminal = document.getElementById("terminal");

document.addEventListener("keydown", (event) => {
    if(event.key == "Enter") {
        if(command.value && command.value.length > 0) {
            process(command.value.toLowerCase());
        }
        command.value = "";
    }
});

class Command {
    constructor(name, exec) {
        this.name = name;
        this.execute = exec;
    }
}


var commands = [];

function process(commandName) {

    var command = commands.find(command => command.name == commandName);
    if(command) {
        command.execute();
    }
}

var clear = new Command("clear", () => {
    terminal.innerHTML = "";
});

var about = new Command("about", () => {
    process("clear");
    terminal.innerHTML = `
        <div style="text-align:center">
        <h4> Terminal OS: développé par <b>raphael giaquinto</b></h4> 
        <p>Version: 1.0.0</p>
        <p>Rôle: développeur fullstack</p>
        <p>Contact: raphaelgiaquinto[at]gmail[dot]com</p>
        <p>Localisation: Nord, France</p>
        <p>Loisirs: Jeux vidéo, lecture, informatique et sciences diverses</p>
        </div>
    `;
});

var help = new Command("help", () => {
    process("clear");
    terminal.innerHTML = `
        <h4>Commandes utiles</h4>
        <p><b>help</b>: affiche ce message</p>
        <p><b>about</b>: informations de version (coordonnées)</p>
        <p><b>history</b>: affiche l'historique des commandes (expériences pro)</p>
        <p><b>htop</b>: liste les processus en cours (compétences)</p>
        <p><b>ls</b>: affiche le répertoire courant (diplômes)</p>
        <h4>Commandes système</h4>
        <p><b>audio-test</b>: test du bon fonctionnement du son</p>
        <p><b>java</b>: lance un programme java</p>

    `;
});

var historyC = new Command("history", () => {
    process("clear");
    terminal.innerHTML = `
        <p><b>1 - [sept. 2021 - Aujourd'hui] </b>: Développeur fullstack chez Weaverize <br> 
        <p class="techs"> Javascript, Node.js, Vue.js, MongoDB, OpenCV, C++, Git</p></p>
        <p><b>2 - [juill. 2020 - sept. 2021] </b>: Ingénieur d'études et dév. chez ACSSI</p>
        <p class="techs"> Java, Javascript, Spring, Angular, PostgreSQL</p></p>
        <p><b>3 - [sept. 2019 - juill. 2020] </b>: Développeur junior chez UNIS</p>
        <p class="techs"> Java, Javascript, Spring, Vue.js, PostgreSQL</p></p>
        <p><b>4 - [Mai. 2020] </b>: Mission CDD Développeur front-end chez Weaverize</p>
        <p class="techs"> Javascript, Litelement</p></p>
    `;
});

var ls = new Command("ls", () => {
    process("clear");
    terminal.innerHTML = `
    <table>
        <tr class="ls">
            <td class="ls-date"><b>2019 - 2020</b></td>
            <td><b>Master 2 E-services</b></td>
            <td><b>Université de Lille</b></td>
        </tr>
        <tr class="ls">
            <td class="ls-date"><b>2018 - 2019</b></td>
            <td><b>Master 1 informatique</b></td>
            <td><b>Université de Lille</b></td>
        </tr>
        <tr class="ls">
            <td class="ls-date"><b>2017 - 2018</b></td>
            <td><b>Licence 3 informatique</b></td>
            <td><b>Université de Lille</b></td>
        </tr>
        <tr class="ls">
            <td class="ls-date"><b>2015 - 2017</b></td>
            <td><b>BTS SIO</b></td>
            <td><b>Lycée Gaston Berger Lille</b></td>
        </tr>
        <tr class="ls">
            <td class="ls-date"><b>2012 - 2015</b></td>
            <td><b>Baccalauréat pro. SEN</b></td>
            <td><b>Lycée Colbert Tourcoing</b></td>
        </tr>
    </table>
    `;
});

var htop = new Command("htop", () => {
    process("clear");
    terminal.innerHTML = `
        <p><b>CPU: [###&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] 10% </b>
        <p><b>Tâches: </b>11</p>
        <table>
            <tr id="htop-bar">
                <td><b>PID</b></td>
                <td><b>USER</b></td>
                <td><b>COMMAND</b></td>
            </tr>
            <tr>
                <td>102454</td>
                <td>raphael</td>
                <td>Javascript</td>
            </tr>
            <tr>
                <td>4587</td>
                <td>raphael</td>
                <td>Vue.js</td>
            </tr>
            <tr>
                <td>447</td>
                <td>raphael</td>
                <td>Node.js</td>
            </tr>
            <tr>
                <td>456787</td>
                <td>raphael</td>
                <td>Java</td>
            </tr>
            <tr>
                <td>456787</td>
                <td>raphael</td>
                <td>Spring</td>
            </tr>
            <tr>
                <td>154</td>
                <td>raphael</td>
                <td>Angular</td>
            </tr>
            <tr>
                <td>1234</td>
                <td>raphael</td>
                <td>PostgreSQL</td>
            </tr>
            <tr>
                <td>57</td>
                <td>raphael</td>
                <td>MongoDB</td>
            </tr>
            <tr>
                <td>78999</td>
                <td>raphael</td>
                <td>C / C++</td>
            </tr>
            <tr>
                <td>1478</td>
                <td>raphael</td>
                <td>OpenCV</td>
            </tr>
            <tr>
                <td>1478</td>
                <td>raphael</td>
                <td>Git</td>
            </tr>
            </table>
    `;
});

var audio = new Audio("horn.mp3");
audio.volume = 1;
audio.playbackRate = 0.5;

var audioTest = new Command("audio-test", ()=>{
    audio.play();
});


var java = new Command("java", ()=>{
    process("clear");
    terminal.innerHTML = `
        <div class="java">
            <p>An error has occured: java.lang.OutOfMemoryError: Java heap space </p>
            <p>Java needs at least 32GB of memory to run pretty much correctly</p>
        </div>
    `;
});

commands.push(clear);
commands.push(about);
commands.push(help);
commands.push(historyC);
commands.push(htop);
commands.push(ls);
commands.push(audioTest);
commands.push(java);

var dateDiv = document.getElementById("date");
dateDiv.innerHTML = new Date().toLocaleString();

setInterval(()=>{
    dateDiv.innerHTML = new Date().toLocaleString();
}, 1000);

process("about");
