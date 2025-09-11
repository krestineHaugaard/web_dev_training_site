document.querySelector("#converter_form").addEventListener("submit", (e) => {
  e.preventDefault();

  const convertValue = document.querySelector("#txtConvertValue").value;
  const convertFrom = document.querySelector("#txtConvertFrom").value;
  const convertToo = document.querySelector("#txtConvertToo").value;

  const finalConvert = document.querySelector("#final_convert");

  console.log(convertValue);

  if (convertFrom === "C") {
    if (convertToo === "F") {
      const convert = convertValue * 1.8 + 32;
      finalConvert.innerText = `${convertValue}&deg;${convertFrom} = ${convert}&deg;${convertToo}`;
    } else {
      const convert = convertValue + 273.15;
      finalConvert.innerText = `${convertValue}&deg;${convertFrom} = ${convert}&deg;${convertToo}`;
    }
  } else if (convertFrom === "F") {
    if (convertToo === "K") {
      const convert = (convertValue + 459.67) / 1.8;
      finalConvert.innerText = `${convertValue}&deg;${convertFrom} = ${convert}&deg;${convertToo}`;
      //   af uforklarelige årsager er denne den eneste der ikke ønsker at gøre det rigtigt ¯\_(ツ)_/¯
    } else {
      const convert = (convertValue - 32) / 1.8;
      finalConvert.innerText = `${convertValue}&deg;${convertFrom} = ${convert}&deg;${convertToo}`;
    }
  } else if (convertFrom === "K") {
    if (convertToo === "C") {
      const convert = convertValue - 273.15;
      finalConvert.innerText = `${convertValue}&deg;${convertFrom} = ${convert}&deg;${convertToo}`;
    } else {
      const convert = convertValue * 1.8 - 459.67;
      finalConvert.innerText = `${convertValue}&deg;${convertFrom} = ${convert}&deg;${convertToo}`;
    }
  } else {
    const convert = convertValue;
    finalConvert.innerText = `${convertValue}&deg;${convertFrom} = ${convert}&deg;${convertToo}`;
  }
});
