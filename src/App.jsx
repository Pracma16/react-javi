import { Link, Outlet } from 'react-router-dom';
import Componente from './components/Componente';

function App() {
  
  return (
    <main>
      <div>
        <h1>Home page</h1>
        <nav>
          <Link to="/">Home</Link><Link to="about">About</Link>
        </nav>
      </div>
      <Outlet />
      <section>
        <Componente  msg="Este es el primer componente"/>
      </section>   
    </main>
  )
} 

export default App
