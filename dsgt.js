let val=0
function f(){
  if(1){
    var val = true
  }else{
    var val= false
  }
}
f()
console.log(val)


// Algorithm Structure Data II curse (5 lab?) 
    // const n = 6;
    // let a = [ 7865, 53 ,43 ,5 ,53, 543, 3452, 34 ];
    // let d = [];
    // let max,b,c;

    // for (let i = 0; i < a.length; i++) {
    //    console.log(a[i])
    // }

    // for (let i = 0; i < a.length; i++) {
    //     max = i;
    //     for (let j = i + 1; j < a.length; j++) {
    //         if (a[j] > a[max])
    //             max = j;
    //     }
    //     b = a[i];
    //     a[i] = a[max];
    //     a[max] = b;
    //     console.log( `${a[i]}  `)
    //     // c = a[i];
    //     // a[i] = d[i];
    //     // d[i] = c;
        
    // }
      //d[n] = a[n];
    //   cout << '\n';
    // for(int i = 0; i < n; i++) {
    //     cout << d[i] << " ";
    // }


    
// let  N=3,k=3.5,r=0
// for(i=1;i<=N;i++){
     
//     r+=1/(2*(k**i)+i)
   
// }
//  console.log(r);
  
// t=1,y=7
// t+=y
// console.log(t)

//  x=-(2**0.5)
//  console.log(x)
//                                          APIKO
/// 10.1 
// function printPowsOf2(number) {
//        if( number === parseInt(number) && number%2==0 ){
//            console.log(number)
//        }
//        else if(number ===  null || number === number.toString()){
//            console.log(`${number} - incorrect type `)
//        }
//    }

//    printPowsOf2("302");
//    printPowsOf2(null);
//    printPowsOf2(128);
//    printPowsOf2(60);
// 10.2
// function calculateSumOfArray() {
//     const arr = [3, 2, "2", null, 1.5, 9.5, undefined];
  
  
//     let suma=0

//     for( let i=0; i<arr.length; i++){
//         if(arr[i] === null || arr[i] === undefined){
//             arr[i] = 0;
//         }
//         else if(arr[i] === arr[i].toString()){
//             arr[i]=parseFloat(arr[i]);
//         }
//         console.log (`arr[${i}] = ${arr[i]}`)
//         suma+=arr[i];
//     }
//     console.log(`Sums of arr[]'s numbers: ${suma}`)
//    }

//     // let a = null
//     // if(a=== null){
//     //     a=0;
//     // }
//     // console.log (a)
//    calculateSumOfArray();
// 10.3 
// function printSeasonByMonth(month) {
//     seasons=["winter","spring","summer","autumn/fall"]
//     if(month=="JANUARY" || month=="FEBRUARY" || month=="DECEMBER" ){
//         console.log(`It's ${seasons[0]}.`)
//     }
//     else if(month=="MARCH" || month=="APRIL" || month=="MAY" ){
//         console.log(`It's ${seasons[1]}.`)
//     }
//     else if(month=="JUNE" || month=="JULY" || month=="AUGUST" ){
//         console.log(`It's ${seasons[2]}.`)
//     }
//     else if(month=="SEPTEMBER" || month=="OCTOBER" || month=="NOVEMBER" ){
//         console.log(`It's ${seasons[3]}.`)
//     }
//     else{
//         console.log(`It's not even the season!`)
//     }
//    }

//    printSeasonByMonth("SEPTEMBER");
//    printSeasonByMonth("NOVEMBER");
//    printSeasonByMonth("JULY");
//    printSeasonByMonth("APRIL");
// 10.4
// function calculateWordsInString(string) {
//    count=0;
//    f= true;
//       for(let i=0;i<=string.length-1;i++){
//          if ((string[i] == ' ')||(string[i]==',')||(string[i]=='.')||(string[i]=='!')||(string[i]=='?')){
//             f = true; // кінець слова
//          } 
//          else
//     {
//         if (f)
//         {
//             // початок нового слова
//             count++;
//             f = false;
//         }
//     }
//       }
//       console.log(`К-сть слів у "${string}": ${count}`);
//    }
//    calculateWordsInString("Easy string for count");
//    calculateWordsInString("Easy");
//    calculateWordsInString("Some string with a triple   space");
//    calculateWordsInString("Some?  string, with a triple   space");