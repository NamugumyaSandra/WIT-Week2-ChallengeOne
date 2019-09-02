
// changing numbers into words
let num = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen'];
let myObject = {};
for(let i=0; i < num.length; i++){
    myObject[num[i]] = Math.pow(i+1,2);
}
console.log(myObject); 
return myObject; 


