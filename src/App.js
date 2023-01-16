import './App.css';
import { useState } from 'react';
import bwomp from './bwomp.mp3';

const RandomColor = () => {
  const [color, setColor] = useState('#000');

  const getRgb = () => Math.floor(Math.random() * 256);

  // this sound is here to represent my sadness, for drone not to recognize my "Generate"
  const audio = new Audio(bwomp);

  const start = () => {
    audio.play().catch((error) => {
      console.error(error);
    });
  };

  const rgbToHex = (r, g, b) =>
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('');

  const handleGenerate = () => {
    const colors = {
      r: getRgb(),
      g: getRgb(),
      b: getRgb(),
    };

    setColor(rgbToHex(colors.r, colors.g, colors.b));
  };

  return (
    <div style={{ backgroundColor: color }} className="container">
      <button
        style={{ color: color }}
        onClick={() => {
          handleGenerate();
          start();
        }}
      >
        Generate
        <br />
        {color}
      </button>
    </div>
  );
};

export default RandomColor;
