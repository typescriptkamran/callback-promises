// // //===============================================================
// // // Why not use a function directly?

// let syncF = () => {
//   console.log("I am sync... ");
// }

// function asyncFun() { 
//   setTimeout(()=> {
//     console.log("I am NOT sync... ");
//     syncF();
//   }, 2000);
// syncF();
// }

// asyncFun();

// syncF = () => {
//   console.log("I am sync TOO or TWO... ");
// }

// asyncFun();


//===============================================================
// Using callback
let syncF = () => {
  console.log("I am sync... ");
}


function asyncFun( cb:()=>void) { 
  setTimeout(()=> {
    console.log("I am NOT sync... ");
    cb();
  }, 2000);
syncF();
}

asyncFun(syncF);

syncF = () => {
  console.log("I am sync TOO or TWO... ");
}

// asyncFun(syncF);

//===============================================================
// Disturbed order gives disturbed output


// // function carMaintenance(){
// //     console.log("I leave my car at 9 in workshop");
// //     setTimeout(() => {console.log("Car Fixed!")}, 2000);
// //     }
    
// //     function pickDress(){
// //     setTimeout(() => {console.log("Dress Ready!")}, 10);}
    
// //     console.log("Mechanic Response: ", carMaintenance());
     
// //     setTimeout(() => {
// //      console.log("Do grocery");
// //     }, 0);
     
// //     console.log("Laundry Response: ", pickDress());
    
//===============================================================
// // // CallBack Implementation

// function carMaintenance(cb:(text:string)=>void){
//     console.log("I leave my car at 9 in workshop");
//     setTimeout(() => {cb("Car Fixed!")}, 2000);}
//   function carMaintCallBack(text:string){
//     console.log("Mechanic Response by CB: " , text);
//     pickDress(dressCallBack);}
//   function pickDress(cb:(text:string)=>void){
//     setTimeout(() => {cb("Dress Ready!")}, 10);}
//   function dressCallBack(text:string){
//     console.log("Laundry Response by CB: " , text);}
//   carMaintenance(carMaintCallBack);
//   setTimeout(() => { console.log("Do grocery");}, 0);
  