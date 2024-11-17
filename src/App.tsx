import './App.css'
import { Column } from './components/Columns/Column'

export function App() {
  return (
    <div className='app'>
      <Column title='Prioridade'/>
      <Column title='Entregar na sexta'/>
      <Column  title='concluidos'/>

    </div>
  )
}
