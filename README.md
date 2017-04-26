# ProyectoX - Sprint03/Leccion25
### El proyecto consiste en aplicar temas de HTML, CSS y JS 
*** Requisitos:
 - Aplicar 2 eventos vistos en clase
 - Aplicar como mínimo 2 eventos no vistos en clase.
 - Usar callbacks

## Come a china
Página web creada para un food truck, que sea dinámica, entretenida y original.

![Alt text](/assets/images/home-comeachina.png?raw=true)

Funciones de Eventos No Utilizados en clase:
- Usados en la sección MENÚ del HTML
- Para arrastrar las fotos de la carta y sumar el combo.

```javascript
function drag(ev){
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.dropEffect = "copyMove";
 }

function over(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "copyMove"
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
```
![Alt text](/assets/images/combo-comeachina.png?raw=true)

Funciones de eventos utilizados en clase:
-Usados en la sección contacto al momento de la validación y al inicio de la pagina

![Alt text](/assets/images/js-valida-comeachina.png?raw=true)

-----------------------------------------------------
Creado por L. Avendaño y L. Gutierrez

