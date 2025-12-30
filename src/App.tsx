import './App.css';
import Calendar from './component/calendar';

function App() {
  const date1 = new Date(2020, 2, 23); 

  return (
    <div className="App">
      <header className="App-header" style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '20px' }}>
          
          <div>
            <Calendar date={date1} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;