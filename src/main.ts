import DataCaptureInterface from './interfaces/DataCapture.interface';
import ManipulationArrayInterface from './interfaces/ManipulationArray.interface';

export default class Main {

    private dataCapture: DataCaptureInterface;
    private manipulationArray: ManipulationArrayInterface;
    private dateLengthAndNumberOperation: number[];
    private length: number;
    private numberOperation: number;
    private arrayOperation: number[][];
    private arrayValidation: boolean;

    constructor(dataCapture: DataCaptureInterface, manipulationArray: ManipulationArrayInterface) {
        this.dataCapture = dataCapture;
        this.manipulationArray = manipulationArray;
        this.length = 0;
        this.numberOperation = 0;
        this.arrayOperation = [];
        this.dateLengthAndNumberOperation = [];
        this.arrayValidation = true;
    }

    public async start() {
        await this.requestDataLengthAndNumberOperation();
        await this.requestArrayOperation();
    }

    private async requestDataLengthAndNumberOperation(): Promise<void> {
        while (this.dateLengthAndNumberOperation.length === 0) {
            this.dateLengthAndNumberOperation = (await this.dataCapture.getLengthAndNumberOperation());
        }
        this.length = this.dateLengthAndNumberOperation[0];
        this.numberOperation = this.dateLengthAndNumberOperation[1];
    }

    private async requestArrayOperation(): Promise<void> {
        this.arrayOperation = await this.dataCapture.getArrayOperation(this.numberOperation);
        this.arrayOperation.forEach(element => {
            if(this.arrayValidation) {
                if (1 <= element[0] && element[0] <= element[1] && element[1] <= this.length && 0 <= element[2]
                    && element[2] <= Math.pow(10,9)) {
                        this.arrayValidation = true;
                } else {
                    this.arrayValidation = false;
                }
            }
        });
        if(this.arrayValidation) {
            console.log(`El resultado es: ${this.manipulationArray.getResultOperationArray(this.length, this.arrayOperation)}`);
        } else {
            console.error('Hay un dato que no cumple las condiciones');
            this.arrayOperation = [];
            this.arrayValidation = true;
            this.requestArrayOperation();
        }
       
    }
}