/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("dominio").innerHTML = imprimirDominios(
    pronoun,
    adj,
    noun,
    extensiones
  );
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon", "aves", "volar", "ave", "rednet"];
let extensiones = ["es", "ar", "ve", "net"];

function generarNombres(pronoun, adj, noun) {
  let str = "";
  for (let nombre = 0; nombre < pronoun.length; nombre++) {
    for (let adjs = 0; adjs < adj.length; adjs++) {
      for (let nouns = 0; nouns < noun.length; nouns++) {
        str += pronoun[nombre] + adj[adjs] + noun[nouns] + " ";
      }
    }
  }
  return str;
}

function generarHacks(dominio, extensiones) {
  let arregloDominios = dominio.split(" ").flat();
  arregloDominios.length = arregloDominios.length - 1;
  let control = "-1";
  for (let index = 0; index < arregloDominios.length; index++) {
    control = 0;
    for (let j = 0; j < extensiones.length; j++) {
      if (arregloDominios[index]) {
        if (arregloDominios[index].endsWith(extensiones[j])) {
          arregloDominios[index] = arregloDominios[index].substring(
            0,
            arregloDominios[index].length - extensiones[j].length
          );
          control = 1;
          arregloDominios[index] += "." + extensiones[j];
        }
      }
    }
    if (control != 1) {
      arregloDominios[index] += ".com";
    }
  }
  return arregloDominios;
}

function imprimirDominios(pronoun, adj, noun, extensiones) {
  let str = generarHacks(generarNombres(pronoun, adj, noun), extensiones);
  let nuevoStr = "";
  for (let index = 0; index < str.length; index++) {
    nuevoStr += index + 1 + ". " + str[index] + "<br/>";
  }
  return nuevoStr;
}
