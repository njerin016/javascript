const container = document.getElementById("container");

const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";

container.appendChild(para);

const heading = document.createElement("h3");
heading.textContent = "I'm a blue h3";
heading.style.color = "blue"

container.appendChild(heading);

const div = document.createElement("div");
div.setAttribute("style", "border: solid black; background: pink;");

const heading2 = document.createElement("h1");
heading2.textContent = "I'm in a div";
div.appendChild(heading2);

const para2 = document.createElement("p");
para2.textContent = "ME TOO";
div.appendChild(para2);

container.appendChild(div);