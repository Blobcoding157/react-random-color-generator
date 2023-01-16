import './App.css';
import { useState } from 'react';

const useGenerateRandomColor = () => {
  const [color, setColor] = useState('');
  const generateColor = () => {
    setColor(Math.random().toString(16).substr(-6));
  };
  return { color, generateColor };
};

function App() {
  const { color, generateColor } = useGenerateRandomColor();
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
          padding: '50px',
          borderRadius: '1000px',
          backgroundImage:
            'linear-gradient(to top, #' + color + ' 0%, #FFFFFF 80%)',
          fontSize: 'larger',
        }}
        onClick={generateColor}
      >
        Generate <br />
        {'#' + color}
      </button>
    </div>
  );
}

export default App;
