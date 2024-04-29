/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHggPSAxNTtcclxuXHJcbmNvbnNvbGUubG9nKHgpO1xyXG5mdW5jdGlvbiBrbmlnaHRUcmF2ZWwoc3RhcnRQb3NpdGlvbiwgZmluaXNoUG9zaXRpb24pIHtcclxuICBjb25zdCBhcnJheSA9IGtuaWdodE1vdmUoc3RhcnRQb3NpdGlvbik7XHJcbiAgY29uc29sZS5sb2coYXJyYXkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBrbmlnaHRNb3ZlKHN0YXJ0KSB7XHJcbiAgY29uc3QgYXJyYXkgPSBbXTtcclxuICBjb25zdCBhbnN3ZXJBcnJheSA9IFtdO1xyXG4gIGNvbnN0IHhQbGFjZSA9IHN0YXJ0WzBdO1xyXG4gIGNvbnN0IHlQbGFjZSA9IHN0YXJ0WzFdO1xyXG4gIGxldCBhbnN3ZXJPbmU7XHJcbiAgbGV0IGFuc3dlclR3bztcclxuICBmdW5jdGlvbiBrbmlnaHRDYWxjdWxhdGUoZmlyc3ROdW0sIHNlY29uZE51bSwgZGlnaXRGaXJzdCwgZGlnaXRTZWNvbmQpIHtcclxuICAgIGNvbnN0IGFycmF5Rmlyc3QgPSBbXTtcclxuICAgIGNvbnN0IGFycmF5U2Vjb25kID0gW107XHJcbiAgICBjb25zdCBmaXJzdE1vdmUgPSBmaXJzdE51bSArIGRpZ2l0Rmlyc3Q7XHJcbiAgICBjb25zdCBmaXJzdE1vdmUyID0gc2Vjb25kTnVtICsgZGlnaXRTZWNvbmQ7XHJcbiAgICBjb25zdCBzZWNvbmRNb3ZlID0gZmlyc3ROdW0gKyBkaWdpdFNlY29uZDtcclxuICAgIGNvbnN0IHNlY29uZE1vdmUyID0gc2Vjb25kTnVtICsgZGlnaXRGaXJzdDtcclxuXHJcbiAgICBhcnJheUZpcnN0LnB1c2goZmlyc3RNb3ZlLCBmaXJzdE1vdmUyKTtcclxuICAgIGFycmF5U2Vjb25kLnB1c2goc2Vjb25kTW92ZSwgc2Vjb25kTW92ZTIpO1xyXG4gICAgcmV0dXJuIFthcnJheUZpcnN0LCBhcnJheVNlY29uZF07XHJcbiAgfVxyXG4gIFthbnN3ZXJPbmUsIGFuc3dlclR3b10gPSBrbmlnaHRDYWxjdWxhdGUoeFBsYWNlLCB5UGxhY2UsIDIsIDEpO1xyXG4gIGFycmF5LnB1c2goYW5zd2VyT25lLCBhbnN3ZXJUd28pO1xyXG5cclxuICBbYW5zd2VyT25lLCBhbnN3ZXJUd29dID0ga25pZ2h0Q2FsY3VsYXRlKHhQbGFjZSwgeVBsYWNlLCAtMiwgMSk7XHJcbiAgYXJyYXkucHVzaChhbnN3ZXJPbmUsIGFuc3dlclR3byk7XHJcblxyXG4gIFthbnN3ZXJPbmUsIGFuc3dlclR3b10gPSBrbmlnaHRDYWxjdWxhdGUoeFBsYWNlLCB5UGxhY2UsIDIsIC0xKTtcclxuICBhcnJheS5wdXNoKGFuc3dlck9uZSwgYW5zd2VyVHdvKTtcclxuXHJcbiAgW2Fuc3dlck9uZSwgYW5zd2VyVHdvXSA9IGtuaWdodENhbGN1bGF0ZSh4UGxhY2UsIHlQbGFjZSwgLTIsIC0xKTtcclxuICBhcnJheS5wdXNoKGFuc3dlck9uZSwgYW5zd2VyVHdvKTtcclxuXHJcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnRbMF0gPiA3IHx8IGVsZW1lbnRbMF0gPCAwKSByZXR1cm47XHJcbiAgICBlbHNlIGlmIChlbGVtZW50WzFdID4gNyB8fCBlbGVtZW50WzFdIDwgMCkgcmV0dXJuO1xyXG4gICAgZWxzZSBhbnN3ZXJBcnJheS5wdXNoKGVsZW1lbnQpO1xyXG4gIH0pO1xyXG4gIHJldHVybiBhbnN3ZXJBcnJheTtcclxufVxyXG5rbmlnaHRUcmF2ZWwoWzcsIDddLCBbMywgM10pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=