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
    if (element[1] > 7 || element[1] < 0) return;
    answerArray.push(element);
  });
  return answerArray;
}
const knightState = (moves, nextMove) => {
  const totalMoves = [];
  totalMoves.push(moves, nextMove);
  const numberOfMoves = totalMoves.length;
  const lastMove = nextMove;

  return {
    numberOfMoves,
    totalMoves,
    lastMove,
  };
};

function knightTravel(startPosition, finishPosition) {
  const unCheckedMoves = [];
  const moves = [startPosition];
  let allMoves = knightMove(startPosition);
  allMoves.forEach((element) => {
    const obj = knightState(moves, element);
    unCheckedMoves.push(obj);
  });

  function areArrayEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
  function knightTravelRecursive(currentObj, finishMove) {
    const currentMove = currentObj.lastMove;
    const { totalMoves } = currentObj;
    const answer = areArrayEqual(currentMove, finishMove);
    if (answer) return currentObj;
    allMoves = knightMove(currentMove);
    allMoves.forEach((element) => {
      const obj = knightState(totalMoves, element);
      unCheckedMoves.push(obj);
    });
    const nextMove = unCheckedMoves.shift();
    const realAnswer = knightTravelRecursive(nextMove, finishMove);
    return realAnswer;
  }
  const firstMove = unCheckedMoves.shift();

  const AnswerObj = knightTravelRecursive(firstMove, finishPosition);

  return AnswerObj;
}
console.log(knightTravel([0, 0], [3, 3]));
