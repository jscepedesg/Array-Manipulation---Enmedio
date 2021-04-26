export default interface DataCaptureInterface {

    getLengthAndNumberOperation(): Promise<number[]>; 

    getArrayOperation(operation: Number):Promise<number[][]>;
}