let decimalToHex = function(num) {
  let hexArr = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ],
    isNum = !!Number.parseInt(num),
    index,
    temp = [],
    result;

  if (isNum) {
    if (num <= 26) {
      num--;
      while (true) {
        index = num % 26;
        num = Math.floor(num / 26);
        temp.push(hexArr[index]);
        if (num === 0) {
          break;
        }
      }
    } else if (num < 26 * 27) {
      index = Math.floor(num / 26) - 1;
      if (num % 26 === 0) {
        index -= 1;
      }
      temp.push(hexArr[index]);
      if (num % 26 === 0) {
        index = 25;
      } else {
        index = num % 26 - 1;
      }
      temp.push(hexArr[index]);
    }

    result = temp.join('');
  } else {
    result = 'Arguments Worng Type';
  }

  return result;
};

let value = process.argv[2];
console.log(decimalToHex(value));
