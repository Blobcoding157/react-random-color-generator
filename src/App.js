import './App.css';
import somewhatUsefulFunctions from './somewhatUsefulFunctions';

function App() {
  const { color, generateColor } = somewhatUsefulFunctions();
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#' + color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button
        style={{
          padding: '40px',
          borderRadius: '10px',
          backgroundImage: 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
          fontSize: 'larger',
        }}
        onClick={generateColor}
      >
        Generate
      </button>
    </div>
  );
}

export default App;
