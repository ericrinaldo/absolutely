import logo from './logo.svg';
import './App.css';
import { Button } from 'components';
import { Suspense } from 'react';


const App = () => {
  return (
    <div className="App">
      <Suspense fallback="loading...">
        <header className="App-header">
          <Button
            text='Click'
          />
        </header>
      </Suspense>
    </div>
  );
}

export default App;
