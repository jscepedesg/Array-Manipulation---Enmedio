import DataCaptureInterface from './interfaces/DataCapture.interface';
import ManipulationArrayInterface from './interfaces/ManipulationArray.interface';

export default class Main {

    private dataCapture: DataCaptureInterface;
    private manipulationArray: ManipulationArrayInterface;
    private dateLengtAndNumberOperation: number[];
    private length: number;
    private numberOperation: number;
    private arrayOperation: number[][];

    constructor(dataCapture: DataCaptureInterface, manipulationArray: ManipulationArrayInterface) {
        this.dataCapture = dataCapture;
        this.manipulationArray = manipulationArray;
        this.length = 0;
        this.numberOperation = 0;
        this.arrayOperation = [];
        this.dateLengtAndNumberOperation = [];
    }

    public async start() {
        this.dateLengtAndNumberOperation = (await this.dataCapture.getLengthAndNumberOperation());
        this.length = this.dateLengtAndNumberOperation[0];
        this.numberOperation = this.dateLengtAndNumberOperation[1];
        this.arrayOperation = await this.dataCapture.getArrayOperation(this.numberOperation);
        console.log(`El resultado es: ${this.manipulationArray.getResultOperationArray(this.length, this.arrayOperation)}`);
    }
}