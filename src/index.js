module.exports = function reverse(n) {
    let res = Math.abs(n).toString();  
    let result = '';
    
    for (let i = res.length - 1; i >= 0; i--) {
      result += res[i];  
    }
    
    return Number(result);  
  }
  