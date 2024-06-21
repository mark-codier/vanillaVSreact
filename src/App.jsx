import reactImg from './assets/react-core-concepts.png'
import { useState } from 'react';
import { CORE_CONCEPTS } from './assets/data';
const words = ['Фундаментальные', 'Четкие', 'Крутые'];

function Cards({ title, image, description }) {
  return(
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

function App() {
  // сamelCase
  // PascalCase
  // snake_case
  // kebab-case
  const [word, setWord] = useState(words[0]);
  return (
    <>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>{word} Основы React</h1>
        <ol>
          <li>Название компонента должно начаться с большой буквы</li>
          <li>Если в названии больше одного слова, то пишется через PascalCase</li>
          <li>Принято использовать семантико-верные названия(Header, MyHeader)</li>
        </ol>
      </header>
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map(el =>
            (<Cards {...el} />
            ))}
          </ul>
        </section>
        <button onClick={e => setWord(() => words[Math.floor(Math.random() * words.length)])}>click</button>
      </main>

    </>
  );
}

export default App;
