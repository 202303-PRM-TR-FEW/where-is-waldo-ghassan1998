const example = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"]];

const major=findTheMajor(example)



const whereIsWaldo = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (major !== matrix[i][j]) {
        return [i + 1, j + 1];
      }
    }
  }
}

console.log(whereIsWaldo(example))
function findTheMajor(matrix){
  const x1=matrix[0][0]
  const x2=matrix[0][1]
  const x3=matrix[0][2]
  if (x1===x2){
    const x=x1
    
    return x
  }else{
    if (x1===x3){
      const x=x1
      
      return x
    }else{
      const x=x2
      
      return x
    }
    if (x2===x3){
      const x=x2

      return x
    }else {
      const x=x2
      
      return x
    }
  }
}



