import { useState } from "react";
function ColorSwitcher() {
  const [colorHex, setColorHex] = useState("");
  const [colorRgb, setColorRgb] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  const handleChange = ({ target }) => {
    setColorHex(target.value);
    if (target.value.length === 7) {
      setColorRgb(convert(target.value));
    }
  };

  const convert = (value) => {
    const hexWithoutFirstSign = value.slice(1);
    var hex = hexWithoutFirstSign.match(/.{1,2}/g);
    console.log(hex);
    const red = parseInt(hex[0], 16);
    const green = parseInt(hex[1], 16);
    const blue = parseInt(hex[2], 16);
    if (isNaN(red) || isNaN(green) || isNaN(blue)) {
      setBackgroundColor("red");
      return "ОШИБКА!";
    }
    const rgb = `rgb(${red},${green},${blue})`;
    setBackgroundColor(rgb);
    return rgb;
  };

  return (
    <div style={{ backgroundColor }}>
      <form>
        <input
          id="colorHex"
          type="text"
          value={colorHex}
          onChange={handleChange}
          placeholder="Введите hex"
        ></input>
        <br />
        <input id="colorRgb" type="text" value={colorRgb} disabled></input>
      </form>
    </div>
  );
}

export default ColorSwitcher;
