
// changing numbers into words
let num = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen'];
let myObject = {};
// let myObject = new Map();

for(let i=1; i < num.length; i++){
    // myObject.set(num[i],Math.pow(i,2))
    myObject[num[i]] = Math.pow(i,2);
}
console.log(myObject); 
return myObject; 


