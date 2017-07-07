function countWord(txt){
 var splitWord = txt.split(' ');
 var countList = {};
 for(var i =0; i<splitWord.length; i++) {
   if(splitWord[i].length >= 2) {
      if(countList[splitWord[i]] == undefined) {
        countList[splitWord[i]] = 1;
      } else {
        countList[splitWord[i]]++;
      }
   }
 }
 return countList;
}
