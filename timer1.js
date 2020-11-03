const args = process.argv.slice(2);
 for(let item of args){
  item = parseInt(item , 10); 
  if ( typeof item !== "number" || item < 0){
   return 0;
  } else { 
   setTimeout(() => {
     process.stdout.write('\x07');
   }, item *1000);
  }
}