class Wrapper {
  static wrap(str, col) {
    let strArr = str.split(" ");
    let newStr = "";
    let counter = 0;

    for(let i = 0; i < strArr.length; i++) {
      if(i !== strArr.length - 1 && counter + strArr[i].length > col) {

        newStr = newStr.concat('\n')
        counter = 0;
      }
      // console.log("here")
      newStr = newStr.concat(strArr[i].concat(" "));
      counter += strArr[i].length + 1;
      console.log(counter, strArr[i]);
    }
    return newStr;
  }
}

let str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
console.log(Wrapper.wrap(str, 15));
