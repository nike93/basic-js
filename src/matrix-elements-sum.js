const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let arr = [];
  for (let i = 0; i < matrix.length - 1; i++){
    for (let j = 0; j < matrix[i].length; j++){
      if(matrix[i][j] !== 0) {   //если j-й элемент из i-й строки не равен 0, то добавляем в новый массив j-ый элемент из i+1 строки
        arr.push(matrix[i + 1][j])
      }
    }
  }
  arr.push(matrix[0]); //первую строку из массива добавляем в новый по умолчанию
  let result = arr.flat();
  return result.reduce((sum, currVal) => sum + currVal);
}

module.exports = {
  getMatrixElementsSum
};
