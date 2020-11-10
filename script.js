// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".
// En la primera lista tendréis que hacer lo siguiente:
//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.
//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

window.addEventListener("load", onLoad);

function onLoad() {
  getAll();
  deleteImp();
  addLi();
}

function getAll (){
  let indicador = document.querySelector(".selected").parentElement.parentElement.childNodes;

  let contador = 1;

  for (var i = 0; i < indicador.length; i++){
    if( indicador [i] instanceof HTMLElement){

      var li = indicador[i].children;

      li[0].classList.add("element-" + contador);
      contador++;

    }
  }
}

function deleteImp(){

  var deleteList = document.querySelectorAll("Li");
  deleteList[1].remove();
  deleteList[3].remove();
}

function addLi() {

  //Seleccionamos el elemento "List2" por su Id
  var listNode = document.getElementById("list2"),
  //Creamos el boton
  var button1 = document.createElement("Button");
      //le agregamos el texto del boton
      button1.innerHTML = "Texto ejemplo 1";
      //le agregamos la clase al boton
      button1.classList.add("element-1");

  var button3 = document.createElement("Button");
      button3.innerHTML = "Texto ejemplo 3";
      button3.classList.add("element-3");

  var button5 = document.createElement("Button");
      button5.innerHTML = "Texto ejemplo 5";
      button5.classList.add("element-5");
      button5.disabled=true;
  //creamos la Lista
  var li1 = document.createElement("LI");
      //agregamos a la lista un hijo que sera el boton
      li1.appendChild(button1);

  var li3 = document.createElement("li");
      li3.appendChild(button3);

  var li5 = document.createElement("Li");
      li5.appendChild(button5);
      //Con este comando desactivamos el boton 5.
      button5.disabled;
  //agregamos la lista con el boton a "lista2"
  listNode.appendChild(li1);
  listNode.appendChild(li3);
  listNode.appendChild(li5);


}
