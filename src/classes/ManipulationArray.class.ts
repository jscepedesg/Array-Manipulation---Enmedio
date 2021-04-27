import ManipulationArrayInterface from "../interfaces/ManipulationArray.interface";

export default class ManipulationArray implements ManipulationArrayInterface {

    private arrayData: number[];
    constructor() {
        this.arrayData = [];
    }

    
    /**
     * @description Método que opera un array con base en la longitud y queries optenidas.
     * @param n 
     * @param queries 
     * @returns 
     */
    public getResultOperationArray(n: number, queries: number[][]): Number {
        // Array inicial
        this.arrayData = new Array(n);
        this.arrayData.fill(0, 0);
        // Operar el array inicial con base en las queries
        queries.forEach((rows) => {
            for(let i = rows[0]-1; i < rows[1]; i++) {
                this.arrayData[i] = this.arrayData[i] + rows[2];
            }
        });
        // Retorna el valor maximo dentro de una lista de numeros.
        return Math.max(...this.arrayData);
    }
}