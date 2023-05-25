// R
function computeResistance(voltage, current) {
  return voltage/current;
}

// Vg
function computeGroundVoltage(voltage) {
  return voltage/2
}

// P
function computePower(voltage, current) {
  return voltage*current;
}

// Ia Ib - current

function computeValues(voltage, groundVoltage, current, power, resistance) {
  let cons1 = -0.090977 * voltage;
  let cons2 = 0.92624 * voltage;
  let cons3 = -1.0748 * groundVoltage;
  let cons4 = -0.088424 * current;
  let cons5 = 1.143 * current;
  let cons6 = -0.015566 * power;
  let cons7 = 0.060937 * resistance;
  const A1 = Math.round(Math.tanh(cons1 + cons2 + cons3 + cons4 + cons5 + cons6 + cons7 - 2.5913))

  cons1 = -0.70681 * voltage;
  cons2 = 0.494 * voltage;
  cons3 = -0.13256 * groundVoltage;
  cons4 = 1.3363 * current;
  cons5 = 0.26657 * current;
  cons6 = 0.38562 * power;
  cons7 = -1.3632 * resistance;

  const A2 = Math.round(Math.tanh(cons1 + cons2 + cons3 + cons4 + cons5 + cons6 + cons7 - 1.4115))

  cons1 = -3.9885 * voltage;
  cons2 = -2.1574 * voltage;
  cons3 = -3.4534 * groundVoltage;
  cons4 = -4.8773 * current;
  cons5 = -3.0662 * current;
  cons6 = -3.6202 * power;
  cons7 = -22.6839 * resistance;

  const A3 = Math.round(Math.tanh(cons1 + cons2 + cons3 + cons4 + cons5 + cons6 + cons7 + 8.9823))

  cons1 = -1.6268 * voltage;
  cons2 = 2.9404 * voltage;
  cons3 = 2.7079 * groundVoltage;
  cons4 = -0.75835 * current;
  cons5 = -0.62001 * current;
  cons6 = 0.6942 * power;
  cons7 = -0.72436 * resistance;

  const A4 = Math.round(Math.tanh(cons1 + cons2 + cons3 + cons4 + cons5 + cons6 + cons7 + 1.3047))

  cons1 = 1.3176 * voltage;
  cons2 = -0.31487 * voltage;
  cons3 = -0.74955 * groundVoltage;
  cons4 = 1.6344 * current;
  cons5 = 1.2226 * current;
  cons6 = 1.8407 * power;
  cons7 = 9.6677 * resistance;

  const A5 = Math.round(Math.tanh(cons1 + cons2 + cons3 + cons4 + cons5 + cons6 + cons7 - 3.7479))

  cons1 = -3.1409 * voltage;
  cons2 = -2.718 * voltage;
  cons3 = -1.727 * groundVoltage;
  cons4 = -0.54884 * current;
  cons5 = -1.3618 * current;
  cons6 = 0.43623 * power;
  cons7 = -0.44521 * resistance;

  const A6 = Math.round(Math.tanh(cons1 + cons2 + cons3 + cons4 + cons5 + cons6 + cons7 + 0.2874))

  cons1 = 6.9379 * voltage;
  cons2 = 6.9308 * voltage;
  cons3 = 7.8911 * groundVoltage;
  cons4 = -1.4816 * current;
  cons5 = -1.0351 * current;
  cons6 = -0.77111 * power;
  cons7 = -25.2023 * resistance;

  const A7 = Math.round(Math.tanh(cons1 + cons2 + cons3 + cons4 + cons5 + cons6 + cons7 + 6.8319))

  cons1 = 1.7422 * voltage;
  cons2 = 3.0126 * voltage;
  cons3 = 2.9594 * groundVoltage;
  cons4 = -4.0528 * current;
  cons5 = -2.4574 * current;
  cons6 = -4.0251 * power;
  cons7 = -17.8199 * resistance;

  const A8 = Math.round(Math.tanh(cons1 + cons2 + cons3 + cons4 + cons5 + cons6 + cons7 + 3.1892))

  cons1 = -0.64547 * voltage;
  cons2 = 0.37026 * voltage;
  cons3 = 0.46168 * groundVoltage;
  cons4 = 0.56301 * current;
  cons5 = -0.12512 * current;
  cons6 = 0.10676 * power;
  cons7 = -0.03734 * resistance;

  const A9 = Math.round(Math.tanh(cons1 + cons2 + cons3 + cons4 + cons5 + cons6 + cons7 - 2.6294))

  cons1 = 0.93517 * voltage;
  cons2 = -0.9232 * voltage;
  cons3 = 0.74114 * groundVoltage;
  cons4 = -0.92873 * current;
  cons5 = 0.10317 * current;
  cons6 = 0.081763 * power;
  cons7 = 0.23828 * resistance;

  const A10 = Math.round(Math.tanh(cons1 + cons2 + cons3 + cons4 + cons5 + cons6 + cons7 + 2.6465))

  return {
    A1,
    A2,
    A3,
    A4,
    A5,
    A6,
    A7,
    A8,
    A9,
    A10
  }
}

function computeCaseValues(aValues) {
  let cons1 = 2.3837 * aValues.A1;
  let cons2 = 0.41167 * aValues.A2;
  let cons3 = 7.5841 * aValues.A3;
  let cons4 = 1.0398 * aValues.A4;
  let cons5 = 8.3001 * aValues.A5;
  let cons6 = -1.9154 * aValues.A6;
  let cons7 = 8.0475 * aValues.A7;
  let cons8 = 7.6889 * aValues.A8;
  let cons9 = 0.94086 * aValues.A9;
  let cons10 = -1.5403 * aValues.A10;

  const voltageL1 = Math.round(Math.tanh(cons1 + cons2 + cons3 + cons4 + cons5 + cons6 + cons7 + cons8 + cons9 + cons10 - 4.0313))

  cons1 = 3.5714 * aValues.A1;
  cons2 = 1.2928 * aValues.A2;
  cons3 = -3.105 * aValues.A3;
  cons4 = 0.08698 * aValues.A4;
  cons5 = -1.5345 * aValues.A5;
  cons6 = 0.97507 * aValues.A6;
  cons7 = -6.6886 * aValues.A7;
  cons8 = 6.039 * aValues.A8;
  cons9 = 3.2387 * aValues.A9;
  cons10 = -2.1317 * aValues.A10;

  const voltageL2 = Math.round(Math.tanh(cons1 + cons2 + cons3 + cons4 + cons5 + cons6 + cons7 + cons8 + cons9 + cons10 - 3.8422))

  cons1 = 2.5974 * aValues.A1;
  cons2 = 0.11273 * aValues.A2;
  cons3 = 8.4052 * aValues.A3;
  cons4 = 1.8547 * aValues.A4;
  cons5 = -1.6827 * aValues.A5;
  cons6 = 2.1742 * aValues.A6;
  cons7 = 11.2094 * aValues.A7;
  cons8 = 1.5093 * aValues.A8;
  cons9 = 1.7444 * aValues.A9;
  cons10 = -2.8796 * aValues.A10;

  const ground = Math.round(Math.tanh(cons1 + cons2 + cons3 + cons4 + cons5 + cons6 + cons7 + cons8 + cons9 + cons10 - 2.6312))

  cons1 = 3.5064 * aValues.A1;
  cons2 = 0.79258 * aValues.A2;
  cons3 = 10.7813 * aValues.A3;
  cons4 = 0.062558 * aValues.A4;
  cons5 = 0.53668 * aValues.A5;
  cons6 = 0.88613 * aValues.A6;
  cons7 = -8.8446 * aValues.A7;
  cons8 = 3.7571 * aValues.A8;
  cons9 = 2.526 * aValues.A9;
  cons10 = -3.6648 * aValues.A10;

  const currentL1 = Math.round(Math.tanh(cons1 + cons2 + cons3 + cons4 + cons5 + cons6 + cons7 + cons8 + cons9 + cons10 - 3.0463))

  cons1 = 3.4118 * aValues.A1;
  cons2 = 2.4088 * aValues.A2;
  cons3 = -2.6342 * aValues.A3;
  cons4 = -1.3216 * aValues.A4;
  cons5 = -1.1569 * aValues.A5;
  cons6 = 0.91441 * aValues.A6;
  cons7 = -8.2325 * aValues.A7;
  cons8 = 8.1588 * aValues.A8;
  cons9 = 3.5831 * aValues.A9;
  cons10 = -3.6276 * aValues.A10;

  const currentL2 = Math.round(Math.tanh(cons1 + cons2 + cons3 + cons4 + cons5 + cons6 + cons7 + cons8 + cons9 + cons10 - 3.0463))

  cons1 = 3.5706 * aValues.A1;
  cons2 = 2.6821 * aValues.A2;
  cons3 = -9.5228 * aValues.A3;
  cons4 = -1.5828 * aValues.A4;
  cons5 = -1.009 * aValues.A5;
  cons6 = 2.5211 * aValues.A6;
  cons7 = -4.4547 * aValues.A7;
  cons8 = 5.0004 * aValues.A8;
  cons9 = 2.699 * aValues.A9;
  cons10 = -3.5976 * aValues.A10;

  const power = Math.round(Math.tanh(cons1 + cons2 + cons3 + cons4 + cons5 + cons6 + cons7 + cons8 + cons9 + cons10 - 2.0418))  

  cons1 = 1.4686 * aValues.A1;
  cons2 = 0.73362 * aValues.A2;
  cons3 = 8.3664 * aValues.A3;
  cons4 = 1.4058 * aValues.A4;
  cons5 = -2.8935 * aValues.A5;
  cons6 = 1.7817 * aValues.A6;
  cons7 = -14.1272 * aValues.A7;
  cons8 = 4.0228 * aValues.A8;
  cons9 = 1.8931 * aValues.A9;
  cons10 = -2.3516 * aValues.A10;

  const resistance = Math.round(Math.tanh(cons1 + cons2 + cons3 + cons4 + cons5 + cons6 + cons7 + cons8 + cons9 + cons10 - 3.6112))

  return "".concat((voltageL1 + 1) / 2).concat((voltageL2 + 1) / 2).concat((ground + 1) / 2).concat((currentL1 + 1) / 2).concat((currentL2 + 1) / 2).concat((power + 1) / 2).concat((resistance + 1) / 2)
}

function determineCase(caseString) {
  switch(caseString) {
    case '0000000': 
      return 'No Fault'
      break;

    case '11011010':
      return 'Line 1 to 2'
      break;

    case '10110101':
      return 'Line 1 to Ground'
      break;

    case '01101101':
      return 'Line 2 to Ground'
      break;

    case '01000001':
      return 'Line 1 Open'
      break;

    case '10000001':
      return 'Line 2 Open'
      break;

    case '00100101':
      return 'Line 1 and 2 Open'
      break;

    default: 
      return 'Fault not defined'
      break;
  }
}

export function generateResults(voltage, current) {
  const resistance = computeResistance(voltage, current)
  const power = computePower(voltage, current)
  const groundVoltage = computeGroundVoltage(voltage)
  const values = computeValues(voltage, groundVoltage, current, power, resistance)
  const caseString = computeCaseValues(values)
  const caseResult = determineCase(caseString)

  return {
    resistance,
    groundVoltage,
    power,
    caseResult
  }
}

(() => {
  const voltage = 230
  const current = 0.8
  const results = generateResults(voltage, current)
  console.table(results)
  // const values = computeValues(
  //   230,
  //   computeGroundVoltage(230),
  //   0.8,
  //   computePower(230, 0.8),
  //   computeResistance(230, 0.8)
  // )
  // const caseString = computeCaseValues(values)
  // console.table(values);
  // determineCase(caseString)
})()