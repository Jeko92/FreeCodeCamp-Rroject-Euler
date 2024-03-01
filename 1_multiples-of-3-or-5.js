const multiplesOf3Or5 = (number)=> {
   const numArr = Array.from({length: number-1}, (_, i)=>i+1);
    console.log(numArr.filter(el => el % 3 === 0 || el % 5 === 0).reduce((a,b)=>a+b,0))
   return numArr.filter(el => el % 3 === 0 || el % 5 === 0).reduce((a,b)=>a+b,0);
}

const multiplesOf3Or5Reduced = number => Array.from({length: number-1}, (_,i)=>i+1)
    .filter(el => el % 3 === 0 || el % 5 === 0 )
    .reduce((a,b)=>a+b,0);

multiplesOf3Or5(1000);
multiplesOf3Or5Reduced(1000);