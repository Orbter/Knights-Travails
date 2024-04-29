const x = 15;

console.log(x);
function knightTravel(startPosition, finishPosition) {
  const array = knightMove(startPosition);
  console.log(array);
}

function knightMove(start) {
  const array = [];
  const answerArray = [];
  const xPlace = start[0];
  const yPlace = start[1];
  let answerOne;
  let answerTwo;
  function knightCalculate(firstNum, secondNum, digitFirst, digitSecond) {
    const arrayFirst = [];
    const arraySecond = [];
    const firstMove = firstNum + digitFirst;
    const firstMove2 = secondNum + digitSecond;
    const secondMove = firstNum + digitSecond;
    const secondMove2 = secondNum + digitFirst;

    arrayFirst.push(firstMove, firstMove2);
    arraySecond.push(secondMove, secondMove2);
    return [arrayFirst, arraySecond];
  }
  [answerOne, answerTwo] = knightCalculate(xPlace, yPlace, 2, 1);
  array.push(answerOne, answerTwo);

  [answerOne, answerTwo] = knightCalculate(xPlace, yPlace, -2, 1);
  array.push(answerOne, answerTwo);

  [answerOne, answerTwo] = knightCalculate(xPlace, yPlace, 2, -1);
  array.push(answerOne, answerTwo);

  [answerOne, answerTwo] = knightCalculate(xPlace, yPlace, -2, -1);
  array.push(answerOne, answerTwo);

  array.forEach((element) => {
    if (element[0] > 7 || element[0] < 0) return;
    else if (element[1] > 7 || element[1] < 0) return;
    else answerArray.push(element);
  });
  return answerArray;
}
knightTravel([7, 7], [3, 3]);
