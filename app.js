const pickRandom = (min,max)=>
  Math.floor(Math.random()*max)+min;
  

const pickFrom = array =>
  array[pickRandom(0,array.length-1)];

const pick = (array,amount) => {
  const recur = (numbers,array) => {
    if(numbers.length>=amount){
      return [numbers,array];
    }
    const picked = pickFrom(array);
    return recur(
      numbers.concat(picked),
      array.filter(item=>item!==picked)
    );
    
  }
  return recur([],array);
  
}

document.querySelector("#button").addEventListener(
  "click",
  ()=>{
    const [jack1] = pick(
      Array.from(new Array(50),
      (x,index)=>index+1),5
    );
    const [jack2] = pick(
      Array.from(new Array(10),
      (x,index)=>index+1),2
    );

    
    
    document.querySelector("#eurojackpot").innerHTML = value=jack1.join(" ");
    document.querySelector("#eurojackpot2").innerHTML = value=jack2.join(" ");
    r
    console.log(jack1, jack2);
    
  }
  
);


