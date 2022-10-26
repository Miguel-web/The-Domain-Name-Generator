/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//import { apply } from "file-loader";

//write your code here

window.onload = () => {
  //document.querySelector("#domains").innerHTML = domains();
  document.querySelector("#btn").addEventListener("click", newDomain);
  document.querySelector("#domains").innerHTML = domains();
};

const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];
const exten = [".com", ".es", ".io", ".us"];

const randomNumber = max => Math.floor(Math.random() * max);
const domains = () => `${pronoun[randomNumber(pronoun.length)]} 
${adj[randomNumber(adj.length)]} 
${noun[randomNumber(noun.length)]} 
${exten[randomNumber(exten.length)]}`;

const newDomain = () => {
  document.querySelector("#domains").innerHTML = domains();
};
//   return who[whoIndex] + " " + what[whatIndex] + " " + when[whenIndex];
