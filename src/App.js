import React, {useState, useEffect} from 'react';
import { Container, Form } from 'semantic-ui-react';
import MessageIcon from './MessageIcon';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
  //const
  const AUTOSAVE_INTERVAL = 3000;

  //initial
  const initialState = {
        name: '',
  }

  //initial object
  const [currentState, setCurrentState] = useState(initialState);
  //
  const [lastText, setLastText] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => { //
    try {

      //timer
      const timer = setTimeout(() => {
        if(lastText !== currentState.name){
          setVisible(true);
          setLastText(currentState.name);
        }        
      }, AUTOSAVE_INTERVAL);

      return () => clearTimeout(timer);
      //eslint-disable-next-line      
    } catch (error) {
      console.log(error);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentState]) //fired change object

  //change value text and input data
  const handleInputChange = e => {
      const {name, value} = e.target;
      setCurrentState({...currentState, [name]: value});
  };  

  return (
    <Container style={{paddingTop:22}}>
      <Form>
          <div className="form-group">
              <label>Input : </label>
              <input type="number" className="form-control"
                      id="name"
                      name="name" value={currentState.name}
                      onChange={handleInputChange}/>
                      {visible?<MessageIcon />:null}                              
          </div>
      </Form>
    </Container>
  );
}

export default App;
