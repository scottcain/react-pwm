//import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      
        <h1>Position Weight Matrix calculator</h1>
      <form name="matrix">
        <TextField id="matrixname" style = {{width: 400}} label="Matrix Name:" value="MAB-3_Yi_1999" /><br />
        <TextField id="a" label="A" style = {{width: 400}} value="76 86 0 0 0 0 0 0 13 62 50 29 8" /><br />
        <TextField id="c" label="C" style = {{width: 400}} value="3 0 1 0 0 0 0 100 19 0 0 13 8" /><br />
        <TextField id="g" label="G" style = {{width: 400}} value="13 0 0 100 0 0 100 0 67 11 6 22 10" /><br />
        <TextField id="t" label="T" style = {{width: 400}} value="8 14 99 0 100 100 0 0 1 27 44 34 74" /><br />
        <TextField id="percentmatch" style = {{width: 40}} label="Percent match" value="80" /><br />
        Sequence:<br />
        <TextareaAutosize id="sequence" style = {{width: 400}} label="Sequence" value="ATGCATGCATGCCGTAGC"/><br />
        <Button onClick={() => { alert('clicked') }}>Submit</Button>
      </form>
    </div>
  );
}

export default App;
