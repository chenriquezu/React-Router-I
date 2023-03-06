import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Boton from '../components/Boton'


export default function Navigation() {
  const [correo,setCorreo]= useState('');
  const [descripcion,setDescripcion] = useState('');

  return (
    <div className="App container w-50">
      <form >
          <div>
              <label htmlFor='name'>Correo</label>
              <input type = 'email'
                      id='name' 
                      defaultValue = {correo} 
                      onChange={(e)=> {
                            setCorreo(e.target.value);
                      }}
                      className='form-control' >
              </input>
          </div>
          
          <div>
              <label htmlFor='name'>Descripción</label>
              <input type = 'text'
                      id='name' 
                      defaultValue = {descripcion} 
                      onChange={(e)=> {
                            setDescripcion(e.target.value);
                      }}
                      className='form-control' >
              </input>
          </div>

          <div className='mt-3 text-center'>
          {correo.length > 0 && descripcion.length > 0 && <Boton texto = "Enviar"/>}
          </div>
 
      </form>
    </div>

     );
}
