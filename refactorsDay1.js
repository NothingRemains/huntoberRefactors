function myRefactoredFunction (arr) {
    if (!(Array.isArray(arr) && arr.length && arr[0].length)) { return arr }
  
    (arr.length >= 10) ? arr.push('maximum') : arrayZero(arr)
  
    return arr
}

function arrayZero (arr) {
    if (arr[0] === 'must be maximum') arr.push('failure')
    if (arr[0] === 'flexible') arr.push('success')
  
    return arr
}