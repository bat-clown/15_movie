/**
 * Created by web-01 on 2018/3/5.
 */
function num() {
  let a = 10;
  let b = [1,2,3,4,5,6,7,8,9,10,11];
  let c = b.length;
  let d = [];
  while( c >= 10 ){
    d.push(b.splice(0,10));
    c = b.length;
  }
  if( c > 0){
    d.push(b);
  }
  return d;
}
let e = num();
console.log(e);
