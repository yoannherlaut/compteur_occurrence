function countWord(txt){
 var splitWord = txt.split(' ');
 var countList = [];
 for(var i =0; i<splitWord.length; i++) {
   if(splitWord[i].length >= 2) {

      var isWrite = false;
      var position;
      for(var y=0; y<countList.length; y++) {
       if(splitWord[i] == countList[y].word) {
          isWrite = true;
          position = y;
       }
      }

      if(isWrite == false) {
        countList.push({word: splitWord[i], count: 1});
      } else {
        countList[position].count ++;
      }

   }
 }
 return countList;
}
