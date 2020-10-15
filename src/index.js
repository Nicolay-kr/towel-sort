module.exports = function towelSort (matrix) {
  let arr = [];
  for (let i in matrix){
      if(i % 2 !== 0){
        matrix[i] = matrix[i].reverse()
      }
      for(let j in matrix[i]){
        arr.push((matrix[i])[j])
      }
    }
  return arr ;
}
