import styles from "./app.module.css";

import { Tip } from "./components/Tip";
import { Letter } from "./components/Letter";
import { Header } from "./components/Header";

export default function App() {
  function handleRestartGame() {
    alert("Reiniciar jogo!");
  }
  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />

        <Tip tip="Uma das linguagens de programação mais utilizadas" />
<div className={styles.word}>
        <Letter value="R" />
        <Letter value="E" />
        <Letter value="A" />
        <Letter value="C" />
        <Letter value="T" />
        </div>
      </main>
    </div>
  );
}
