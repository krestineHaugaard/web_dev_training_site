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

// Teacher version using switch

// 'use strict';

// document.querySelector('#frmTemperature').addEventListener('submit', (e) => {
//     e.preventDefault();

//     const CK_DIFF = 273.15;
//     const FK_DIFF = 459.67;
//     const FK_FACTOR = 5 / 9;
//     const CF_FACTOR = 1.8;
//     const CF_DIFF = 32;
    
//     const temperature = parseFloat(e.target.txtTemperature.value);
//     const from = e.target.lstFrom.value;
//     const to = e.target.lstTo.value;
//     let conversion = '';
    
//     switch (from + to) {
//         case 'CF': conversion = (temperature * CF_FACTOR) + CF_DIFF;    break;
//         case 'CK': conversion = temperature + CK_DIFF;                  break;
//         case 'FC': conversion = (temperature - CF_DIFF) / CF_FACTOR;    break;
//         case 'FK': conversion = (temperature + FK_DIFF) * FK_FACTOR;    break;
//         case 'KC': conversion = temperature - CK_DIFF;                  break;
//         case 'KF': conversion = (temperature * FK_FACTOR) - FK_DIFF;    break;
//     }

//     if (conversion === '') {
//         document.querySelector('#fromText').innerHTML = '';
//         document.querySelector('#toText').innerHTML = '';
//     } else {
//         document.querySelector('#fromText').innerHTML = temperature + '&deg;' + from + ' = ';
//         document.querySelector('#toText').innerHTML = conversion.toFixed(2) + '&deg;' + to;
//         document.querySelector('#results').classList.add('show');
//     }    
// });
