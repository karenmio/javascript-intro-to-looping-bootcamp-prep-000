const array = [];

function forLoop(array) {
  let i=0;
  for (i===0; i<25; i++){
   if (i===1) {
    array.push("I am 1 stange loop.")
   } else {
    array.push('I am ${i} strange loops.')
   }
  }
return array;
}
 
function whileLoop() {
  let countdown=100;
  while (countdown>0) {
    console.log(--countdown)
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >=0.5
}

function doWhileLoop(array) {
  do{array.shift()}
  while (array.length>0 && maybeTrue());
  return array;
}

