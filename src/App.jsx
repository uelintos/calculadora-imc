import { useState } from "react";
import Form from './components/Form';
import './components/Styles/index.scss';
import './components/Styles/form.scss'

  function App(){
    const [showForm, setShowForm] = useState(false);

  if(!showForm){
    return(
      <div className="intro--container">
        <h1 className="intro--container-title">Bem vindo ao meu site!</h1>
        <p className="intro--container-text">Este site calcula o seu índice de massa corporal(IMC)</p>
        <button className="intro--container-btn" onClick={() => setShowForm(true)}>
          Começar
        </button>
      </div>
    )
  }

  return (
    <div className="container">
      <Form />
      <footer className="footer">
        <p>© 2025 — Feito por Wellington</p>
      </footer>
    </div>
  )
  
}
export default App
