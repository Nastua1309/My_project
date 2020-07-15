function inArray(text, array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] == text) 
      return true;
    }
    return false;
  }
   
  console.log(inArray('dog', ['hot', 'dog', 'mmm']));