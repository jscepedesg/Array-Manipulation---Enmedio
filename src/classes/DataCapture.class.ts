//Dependencias
import readLine, { Interface } from 'readline';
import DataCaptureInterface from '../interfaces/DataCapture.interface';

export default class DataCapture implements DataCaptureInterface{

    private capture: Interface;
    private arrayOperation:  number[][]; 

    constructor() {
        this.capture = readLine.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        this.arrayOperation = [];
    }

    
    /**
     * @description Método para optener un array de numeros con la longitud y el numero de operaciones.
     * @returns 
     */
    public async getLengthAndNumberOperation(): Promise<number[]> {
        console.log('Ingrese la longitud y el numero de operaciones: "Ejemplo: 1 3"');
        return new Promise((_resolve, reject) => {
            this.capture.question('', (response) => {
                let data = response.split(" ").map(Number);
                if(3 <= data[0] && data[0] <= Math.pow(10,7)) {
                    if(1 <= data[1] && data[1] <= (2* Math.pow(10, 5))) {
                        _resolve(response.split(" ").map(Number));
                    } else {
                        _resolve([]);
                        console.error('Hay un dato que no cumple las condiciones');
                    }
                    
                } else {
                    _resolve([]);
                    console.error('Hay un dato que no cumple las condiciones');
                }
            });
        });
    }


    /**
     * @description Método que llenar un array con la operaciones que se harán.
     * @param operation 
     * @returns 
     */
    private async fillArray(operation: Number): Promise<number[][]> {
        this.arrayOperation = [];
        for(let i = 0; i < operation; i++) {
            console.log(`Ingrese la fila ${i+1} del array: "Ejemplo: 1 2 100"`);
            let newArray: number[] = await new Promise((_resolve, reject) => {
                this.capture.question('', (response) => {
                    _resolve(response.split(" ").map(Number));
                });
            });
            this.arrayOperation.push(newArray);
        }
        return this.arrayOperation;
    }


    /**
     * @description Método que retorna una array bidimensional de operaciones.
     * @param operation 
     * @returns 
     */
    public async getArrayOperation(operation: Number): Promise<number[][]> {
        return  new Promise(async (_resolve, reject) => {
            _resolve(await this.fillArray(operation));
        });
    }
}