import React from 'react'
import{MenuItem, FormControl, Select} from "@material-ui/core";
import './App.css';

function App() {
  return (
    //BEM naming convention
    <div className="app"> 
      <div className="app__header">
        <h1>hi</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value ="abc">
            <MenuItem value="worldwide">worldwide</MenuItem>
            <MenuItem value="worldwide">abc1</MenuItem>
          </Select>
        </FormControl>
      </div>
      
      {/*Header Component*/}
      {/*Title + Select input Dropdown component*/}
      {/*Infoboxes Component*/}
      {/*Infoboxes Component*/}
      {/*Infoboxes Component*/}

       {/*Table Component*/}
        {/*graph Component*/}
      
       {/*Map Component*/}

      
    </div>
  );
}

export default App;
