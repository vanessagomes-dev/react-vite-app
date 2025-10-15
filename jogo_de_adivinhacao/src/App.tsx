import styles from "./app.module.css"

import { Tip } from './components/Tip'
import { Header } from './components/Header'


export default function App() {

  function handleRestartGame() {
    alert('Reiniciar jogo!')
  }
  return (
    <div className={styles.container}>
      <Header current={5} max={10} onRestart={handleRestartGame}/> 
      <Tip tip= "Uma das linguagens de programação mais utilizadas" />
    </div>
  )
}