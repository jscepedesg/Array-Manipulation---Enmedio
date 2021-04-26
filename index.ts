import Main from './src/main';
import DataCapture from './src/classes/DataCapture.class';
import ManipulationArray from './src/classes/ManipulationArray.class';

const main = new Main(new DataCapture, new ManipulationArray);
main.start();