// console.log("hello world")

// let ll=10;
// let ul=100;


// for(let num=ll; num<=ul;num++)
// {
//     let count=0;
//     for(let div=2;div<=num-1;div++)
//     {
//         if(num%div ==0){
//             count++
//         }
//     }
//     if(count>0){
//         console.log("not prime",num);
//     }
//     else{
//         console.log("prime",num);
//     }
// }

// let name="aspy";

// switch(name){
//     case "vikram":
//         console.log("bhai tere se nahi hoga")
//     case "manjeet":
//             console.log("bhai tum se bhi nhi hoga")
//     case "aspy":
//             console.log("aap se hoga bas")
//             break;
//     default:
//         console.log("okk bro")

// }

// let n=5;
// let nsp=n-1;
// let nst=1;

// for(let row=1;row<=n;row++)
// {

//         for(let sp=1;sp<=nsp;sp++)
//         {
//                 console.log("&");
//         }
//         for(let st=1;st<=nst;st++){
//                 console.log("*");
//         }
//         console.log()

//         if()
// }


// let n=5;

// for(let row=1;row<=n;row++)
// {
//         for(let col=1;col<=row;col++){
//                 process.stdout.write("*")
//         }
//         console.log();
// }

// let n=5;

 
// for(let row=1;row<=n;row++)
// {
        
//         for(let col=1;col<=row;col++){
//          if(row==col || row+col==n+1){
//                 process.stdout.write("*")   
//          }else{
//                 process.stdout.write(" ")
//          }
//         }
//         console.log()
// }

// let n=10;
// let nst =1;

// for(let row=1;row<=n;row++){
//         for(let st=1;st<=nst;st++){
//                 process.stdout.write("* ")  
//         }
//         if(row<5){
//                 nst=nst+1
//         }
//         else{
//                 nst=nst-1
//         }
//         console.log()
// }

// let n=10;
// let nst=1;

// for(let row=1;row<=n;row++){
//         for(let st=1;st<=nst;st++){
//                 process.stdout.write("* ")     
//         }
//         if(row<5){
//                 nst=nst+1
//         }
//         else{
//                 nst=nst-1
//         }
//         console.log();
// }

// let n=10;
// let nst=n-1;
// let nsp=1

// for(let row=1;row<=n;row++){
//         for(let st=1;st<=nst;st++){
//                 process.stdout.write(" ")     
//         }
//         for(let sp=1;sp<=nsp;sp++){
//                 process.stdout.write("* ")  
//         }
//         if(row<5){
//                 nst=nst-1;
//                 nsp=nsp+1
//         }
//         else{
//                 nst=nst+1;
//                 nsp=nsp-1    
//         }
//         console.log();
// }
        

// let n=10;
// let oye=0;
// let hoye=1;

// for(let i=1;i<=n;i++){
//         console.log(oye)
//         let nn=oye+hoye;
// oye=hoye;
// hoye=nn;
       
// }

// let n=10;
// let nst=1;

// for(let row=1;row<=n;row++)
// {
//         for(let st=1;st<=nst;st++){
//                 process.stdout.write("* ")  
//         }

//         if(row<5){
//                 nst=nst+1
//         }
//         else{
//                 nst =nst-1
//         }
//         console.log()
// }

// let n=5;

// for(let row=1;row<=n;row++)
// {
//         let str="";
//         for(let col=1;col<=row;col++){

//               str=str+col;

//         }
//         str=str+"\n"
//         console.log(str);
// }


// let n=5;
// let nsp=n-1;
// let nst=1;

// for(let row=1;row<=n;row++){
//         for(let sp=1;sp<=nsp;sp++){
//                 process.stdout.write(" ")   
//         }
//         for(let st=1;st<=nst;st++){
//                 process.stdout.write("* ")
//         }
//         nst=nst+1;
//         nsp=nsp-1;
//         console.log();


// }


// let n=7

// for(let row=1;row<=n;row++){
//         for(let col=1;col<=n;col++){
//             if(row==1){
//                 if(col<=4 || col==7){
//                         process.stdout.write("*")
//                 }
//             else{
            
//                 process.stdout.write("\t")
//         }
// }

//              if(row<4){
//                 if(col==4||col==7){
//                         process.stdout.write("*\t")     
//                 }
//                 else{
//                         process.stdout.write("\t")   
//                 }

//             }
//             else if(row==4){
//                 if(col<=7){
//                         process.stdout.write("*\t")  
//                 }

//             }
//             else if(row<7){
//                 if(col==1||col==4){
//                         process.stdout.write("*\t")
//                 }
//                 else{
//                         process.stdout.write("\t")   
//                 }

//             }
//             else{
//                 if(col==1||col>=4){
//                         process.stdout.write("*\t") 
//                 }
//                 else{
//                         process.stdout.write("\t")
//                 }


//             }
//         }
       
//         console.log();
// }

// let n=7;

// for(let row=1;row<=n;row++)
// {
//         for(let col=1;col<=n;col++){
//                 if(row==1){
//                    if(col==1||col>=4){
//                         process.stdout.write("*\t") 
//                    }else{
//                         process.stdout.write("\t") 
//                    }     

//                 }
//                 else if(row<4){
//                         if(col==1||col==4){
//                                 process.stdout.write("*\t") 
//                            }else{
//                                 process.stdout.write("\t") 
//                            } 

//                 }
//                 else if(row==4){
//                         if(col<=7){
//                                 process.stdout.write("*\t") 
//                            }

//                 }
//                 else if(row<7){
//                         if(col==4||col>=7){
//                                 process.stdout.write("*\t") 
//                            }else{
//                                 process.stdout.write("\t") 
//                            } 

//                 }
//                 else{
//                         if(col<=4||col==7){
//                                 process.stdout.write("*\t") 
//                            }else{
//                                 process.stdout.write("\t") 
//                            } 

//                 }
//         }
//         console.log();
// }


// let n=7

// for(let row=1;row<=n;row++){
//         for(let col=1;col<=n;col++){
//             if(row==1){
//                 if(col<=4 || col==7){
//                         process.stdout.write("*")
//                 }
//             else{
            
//                 process.stdout.write("\t")
//         }
// }

//              if(row<4){
//                 if(col==4||col==7){
//                         process.stdout.write("*\t")     
//                 }
//                 else{
//                         process.stdout.write("\t")   
//                 }

//             }
//             else if(row==4){
//                 if(col<=7){
//                         process.stdout.write("*\t")  
//                 }

//             }
//             else if(row<7){
//                 if(col==1||col==4){
//                         process.stdout.write("*\t")
//                 }
//                 else{
//                         process.stdout.write("\t")   
//                 }

//             }
//             else{
//                 if(col==1||col>=4){
//                         process.stdout.write("*\t") 
//                 }
//                 else{
//                         process.stdout.write("\t")
//                 }


//             }
//         }
       
//         console.log();
// }

// let n=7;

// for(let row=1;row<=n;row++)
// {
//         for(let col=1;col<=n;col++){
//                 if(row==1){
//                    if(col<=4||col==7){
//                         process.stdout.write("*\t") 
//                    }else{
//                         process.stdout.write("\t") 
//                    }     

//                 }
//                 else if(row<4){
//                         if(col==4||col==7){
//                                 process.stdout.write("*\t") 
//                            }else{
//                                 process.stdout.write("\t") 
//                            } 

//                 }
//                 else if(row==4){
//                         if(col<=7){
//                                 process.stdout.write("*\t") 
//                            }

//                 }
//                 else if(row<7){
//                         if(col==1||col==4){
//                                 process.stdout.write("*\t") 
//                            }else{
//                                 process.stdout.write("\t") 
//                            } 

//                 }
//                 else{
//                         if(col==1||col>=4){
//                                 process.stdout.write("*\t") 
//                            }else{
//                                 process.stdout.write("\t") 
//                            } 

//                 }
//         }
//         console.log();
// }


let n=7;


for(let row=1;row<=n;row++){
     for(let col=1;col<=n;col++){
          if(row==1){
               if(col<=5){
                    process.stdout.write("* ")
               }
               else{
                    process.stdout.write("\t")
               }

          }
          else if(row<4){
               if(col==1){
                    process.stdout.write("*")
               }
               else{
                    process.stdout.write("\t")
               }

          }
          else if(row==4){
               if(col<=5){
                    process.stdout.write("* ")
               }
               else{
                    process.stdout.write("\t")
               }

          }
          else if(row<7){
               if(col==1){
                    process.stdout.write("*")
               }
               else{
                    process.stdout.write("\t")
               }

          }else{
               if(col==1){
                    process.stdout.write("*\t")
               }
               else{
                    process.stdout.write("\t")
               }

          }
     }
     console.log()
}