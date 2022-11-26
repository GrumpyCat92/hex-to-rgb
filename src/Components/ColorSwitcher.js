import { useState } from "react";
function ColorSwitcher() {
  const [colorHex, setColorHex] = useState("");
  const [colorRgb, setColorRgb] = useState("");

  const handleChange = ({ target }) => {
    setColorHex(target.value);
    if (target.value.length === 7) {
      setColorRgb(convert);
    }
  };

  const convert = () => {
    var hex = colorHex.slice(1).match(/.{1,2}/g);
    const red = parseInt(hex[0], 16);
    const green = parseInt(hex[1], 16);
    const blue = parseInt(hex[2], 16);
    if (isNaN(red) || isNaN(green) || isNaN(blue)) {
      return "ОШИБКА!";
    }
    return `rgb(${red},${green},${blue})`;
  };

  return (
    <div style={{ backgroundColor: colorRgb }}>
      <form>
        <input
          id="colorHex"
          type="text"
          value={colorHex}
          onChange={handleChange}
        ></input>
        <br />
        <input id="colorRgb" type="text" value={colorRgb} disabled></input>
      </form>
    </div>
  );
}

export default ColorSwitcher;
