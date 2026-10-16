import Counter from './pages/Counter'
import DataFetcher from './pages/DataFetcher'
import ParentComponent from './pages/ParentComponent'
import SimpleForm from './pages/SimpleForm'
import NameList from './pages/NameList' 
import './App.css'

const experiments = [
  { number: 1, title: 'Counter', Component: Counter },
  { number: 2, title: 'DataFetcher', Component: DataFetcher },
  { number: 3, title: 'NameList', Component: NameList },
  { number: 4, title: 'ParentComponent', Component: ParentComponent },
  { number: 5, title: 'SimpleForm', Component: SimpleForm },
  
]


function App() {
  return (
    <div className="app-shell">
      <header className="lab-header">
        <h1>Experiment 3</h1>
      </header>

      <main className="experiment-list">
        {experiments.map(({ number, title, Component }) => (
          <article className="experiment-card" key={number}>
            <h2>
              <span className="experiment-number">{number}</span>
              {title}
            </h2>
            <section className="demo-panel" aria-label={`${title} output`}>
              <Component />
            </section>
          </article>
        ))}
      </main>
    </div>
  )
}

export default App
