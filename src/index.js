module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) return false
  const arr = new Map(bracketsConfig);
  let res = true
  let subStr = str[0]
  let i = 0, r = 1

  while (res){
      if (i < 0){
          subStr += str[r] 
          i=0
          r++
      }
      if(arr.get(subStr[i]) == str[r]){
          subStr = subStr.slice(0, i)
          r++
          i--
      }
      else {
         subStr += str[r] 
         i++
         r++
      } 
      if (r == str.length && subStr == "") return true
      if (r == str.length && subStr != "") return false
  }
}
