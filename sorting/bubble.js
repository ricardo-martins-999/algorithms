const bubbleSort = function(arr, compare = (a, b) => a - b) {
  const result = [...arr];
  for (let i = 0; i < result.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < result.length - 1 - i; j++) {
      if (compare(result[j], result[j + 1]) > 0) {
        [result[j], result[j+1]] = [result[j+1], result[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }
  return result;
}

const generateRandomArray = function (size, min = 0, max = 10) {
  const array = [];

  for (let i = 0; i < size; i++) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    array.push(random);
  }

  return array;
}

const printArray = function(arr) {
  process.stdout.write(arr.join(' ') + '\n');
}

const main = function() {
  const original = generateRandomArray(10, 0, 50);

  process.stdout.write('\nbefore ordering: ');
  printArray(original);

  const asc = bubbleSort(original);
  process.stdout.write('after ordering (asc): ');
  printArray(asc);

  const desc = [...asc].reverse();
  process.stdout.write('after ordering (desc): ');
  printArray(desc);

  process.stdout.write('\n');
}

main();