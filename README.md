# Array-Manipulation---Enmedio
Ejercicio para manipular una array bidimensional que después de realizar una serie de operaciones retorna el numero mayor.

## Dependencias

- Instalar NodeJs ultima versión estable.
- Instalar de manera globlar typescript, nodemon y ts-node ---- `npm i -g typescript nodemon ts-node`
- No olvide descargar las dependencias del proyecto con: `npm i` en la raiz del proyecto.

## Generar build

Para generar la carpeta dis, que tendra el compilado del programa se debe estar en la raiz del proyecto y correr
el comando: 

`npm run build`

Si desea ejecutarlo puede hacerlo dentro de la raiz del compilado con el comando:

`node index.js`

## Compilar entorno de desarrollo

Si desea compilar el entorno de desarrollo en typescript es necesario habler cumplido los requerimientos dichos en el apartado de dependencias, si ya lo hizo, puede ejecutar el software con:

`npm run start-dev`

## Descripción 

Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each of the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in your array. 

For example, the length of your array of zeros . Your list of queries is as follows:

|a|b|k|
| ------------ | ------------ | ------------ |
|1|5|3|
|4|8|7|
|6|9|1|

Add the values of between the indices and inclusive:

| 1  | 2  | 3  | 4  | 5  |6   |7   |8   |9   |10   |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
|  0 | 0  | 0  | 0  | 0  | 0  | 0  | 0  |0   |0   |
|   3|  3 | 3  | 3  |  3 |  0 | 0  | 0  | 0  |0   |
|   3|  3 | 3  | 10  | 10  | 7  |7   |7   |0   | 0  |
|   3|  3 | 3  | 10  | 10  | 8  |8   |8   |1   | 0  |


The largest value is **10  **after all operations are performed.

##### Function Description

Complete the function arrayManipulation in the editor below. It must return an integer, the maximum value in the resulting array.

arrayManipulation has the following parameters:

- n - the number of elements in your array
- queries - a two dimensional array of queries where each queries[i] contains three integers, a, b, and k.

##### Input Format

The first line contains two space-separated integers **n** and **m**, the size of the array and the number of operations. Each of the next **m** lines contains three space-separated integers **a**, **b** and **k**, the left index, right index and summand.

##### Constraints

- **`3 <= n <= 10^7`**
- **`1 <= m <= 2 * 10^5`**
- **`1 <= a <= b <= n`**
- **`0<= k <= 10^9`**


##### Output Format

Return the integer maximum value in the finished array.

##### Sample Input

5 3
1 2 100
2 5 100
3 4 100

##### Sample Output

200

##### Explanation

- After the first update list will be 100 100 0 0 0 .
- After the second update list will be 100 200 100 100 100 .
- After the third update list will be 100 200 200 200 100 .
- The required answer will be **200**.

##  Estándares de codificación

## Indice
<!-- MarkdownTOC depth=0 autolink=true autoanchor=true -->

- [Declaración de variables](#declaración-de-variables)
    - [Nombres de variables](#nombres-de-variables)
    - [Valores de variables](#valores-de-variables)
    - [Variables de tipo colección](#variables-de-tipo-colección)
- [Declaración de funciones](#declaración-de-funciones)
    - [Nombres de funciones](#nombres-de-funciones)
    - [Llaves y espaciado de funciones](#llaves-y-espaciado-de-funciones)
    - [Tipos de funciones](#tipos-de-funciones)
    - [Argumentos de una función](#argumentos-de-una-función)
- [Construcción de cadenas](#construcción-de-cadenas)
- [Operaciones](#operaciones)
    - [Operaciones lógicas de igualdad y desigualdad](#operaciones-lógicas-de-igualdad-y-desigualdad)
- [Referencias](#referencias)

<!-- /MarkdownTOC -->

<a name="declaración-de-variables"></a>
## Declaración de variables

<a name="nombres-de-variables"></a>
#### Nombres de variables
Los nombres de variables deben ser escritos con notación camelCase.

```javascript
var test;  // Nombre de variable correcto
var i_am_bad; //  Nombre de variable incorrecto
var iAmFine; //  Nombre de variable correcto
```

<a name="valores-de-variables"></a>
#### Valores de variables
Los espacios entre el nombre y el valor de una variable son muy importantes, puesto que mejoran la legibilidad del código.

```javascript
var test = 1;  // Nombre de variable correcto
var iAmFine = true; //  Nombre de variable correcto
```

**Nota:** Es aconsejable que cada variable tenga un comentario acerca de su objetivo, de manera que aumente la comprensibilidad del código.

<a name="variables-de-tipo-colección"></a>
#### Variables de tipo colección
Cuando la variable a declarar contiene un elemento de tipo colección (arreglo y objeto) y su contenido excede los 70 caracteres o tiene más de 2 elementos debe tener cada item de la colección en una linea diferente para mejorar la legibilidad del código.
```javascript
// declaración correcta
var elements = [], // colección vacia
    gender = ["male", "female"], // colección con 2 elementos
    users = {
        "Hugo": "Duck 1",
        "Paco": "Duck 2",
        "Luis": "Duck 3"
    }, // colección con más de 2 elementos
    attributes = [
        "fuerza",
        "velocidad",
        "inteligencia",
        "carisma",
    ],
    base64_logo_parts = [
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAB+',
        'FBMVEUAAAA/mUPidDHiLi5Cn0XkNTPmeUrkdUg/m0Q0pEfcpSbwaVdKskg+lUP4zA/iLi3m',
        'sSHkOjVAmETdJSjtYFE/lkPnRj3sWUs8kkLeqCVIq0fxvhXqUkbVmSjwa1n1yBLepyX1xxP',
        '0xRXqUkboST9KukpHpUbuvRrzrhF/ljbwaljuZFM4jELaoSdLtElJrUj1xxP6zwzfqSU4i0',
        // ...
        // more lines 
        // ...
        '/0rbNvHVxiJywa8yS2KDfV1dfbu31H8jF1RHiTKtWYeHxUvq3bn0pyjCRaiRU6aDO+gb3aE',
        'fEeVNsDgm8zzLy9egPa7Qt8TSJdwhjplk06HH43ZNJ3s91KKCHQ5x4sw1fRGYDZ0n1L4FKb',
        '9/BP5JLYxToheoFCVxz57PPS8UhhEpLBVeAAAAAElFTkSuQmCC'
    ]; // colección con más de 70 caracteres

```


<a name="declaración-de-funciones"></a>
## Declaración de funciones
Uno de los elementos más importantes de javascript son las funciones, éstas son conocidas como ciudadanos de primer tipo. Para la declaración de funciones es necesario tener en cuenta las siguientes premisas:

<a name="nombres-de-funciones"></a>
#### Nombres de funciones
Los nombres de funciones deben ser escritos con notación camelCase.

```javascript
function testFunction() {
    // code here
}
```

<a name="llaves-y-espaciado-de-funciones"></a>
#### Llaves y espaciado de funciones
Las llaves de las funciones deben empezar en la misma linea que se declara la función y debe haber un espacio entre el parentesis de cierre de argumentos y la llave de inicio de cuerpo de función, así:

```javascript
// A. Declaración de función
// B. Parentesis de argumentos
// C. Espacio
// D. Llave de inicio de cuerpo de función.

// ------- A ------- --- B --- C D
function testFunction(username) { 
    console.log('Hello ' + username + '...');
}
```


<a name="tipos-de-funciones"></a>
#### Tipos de funciones
En javascript las funciones pueden ser funciones como tal o funciones como variables. En caso de que sean funciones como variables es necesario usar punto y coma (`;`) despues del cuerpo de la función para finalizar la sentencia.

```javascript
function testFunction() {
    console.log('Hello Test...');
}

var anotherTestFunction = function() {
    console.log('Hello Test...');
}; // ; para fin de sentencia.
```

<a name="argumentos-de-una-función"></a>
#### Argumentos de una función
Para mejorar la legibilidad del código javascript los argumentos de funciones deben ser nombres con notación camelCase. Si son varios argumentos deben estar separados por coma (`,`) y un espacio, así:

```javascript
function testFunction(arg1, arg2, arg3) {
    console.log('Hello Test...');
}

var testFunction = function(arg1, arg2) {
    console.log('Hello Test...');
}; // ; para fin de sentencia.
```
Si unicamente hay un argumento no hay espacios a ningún lado, así:
```javascript
function testFunction(arg1){
    console.log('Hello Test...');
}
```


<a name="construcción-de-cadenas"></a>
## Construcción de cadenas
Deben ser usadas comilas simples ( ' ) puesto de ésta manera se reducen los problemas a la hora de escapar las comillas dobles ( " ) usadas cuando se genera HTML y mejora la legibilidad.
```javascript
// Incorrecto
var container0 = "<div class=\"another-container\" data-type=\"html\"></div>";
var container1 = "<div class="+'"'+"another-container"+'"'+
    " data-type="+'"'+"html"+'"'+"></div>";
// Correcto
var containerString = '<div class="container" data-type="html"></div>';
```
**Nota**: Para los casos en que no se estan construyendo elementos del DOM también deben ser usadas las comillas simples por uniformidad en el código.

<a name="operaciones"></a>
## Operaciones
Todas las operaciones deben tener espacios entre los operadores y los operandos para mejorar la legibilidad del código. Si se están usando parentesis no es necesario usar espacio entre los parentesis y los operandos.
```javascript

var v1 = b * h / 2,
    v2 = (location.toLowerCase() === 'medellin') ? 'frijoles' : 'lentejas';

```

<a name="operaciones-lógicas-de-igualdad-y-desigualdad"></a>
#### Operaciones lógicas de igualdad y desigualdad
Deben usarse los comparadores estrictos (aquellos que comparan valor y tipo `===`, `!==`) para todas las operaciones lógicas de comparación.
```javascript

function factorial(x) {
    if(x === 0){
        return 1;
    } else if(x !== 0) {
        return factorial(x - 1) * x;
    }
}

factorial(10);

```

<a name="referencias"></a>
## Referencias
* https://github.com/0granada/js-coding-standards/blob/master/README.md
* http://javascript.crockford.com/code.html
* [javascript: The good parts](http://www.amazon.com/exec/obidos/ASIN/0596517742/wrrrldwideweb)