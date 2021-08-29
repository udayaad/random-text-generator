const alphabets=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


 const randomWordGenerator=()=>{
  const alphabetGenerator=()=>{
    let randomNumber=Math.floor(Math.random()*25);
    let alphabet=alphabets.filter((value,index)=>(index===randomNumber))
    return alphabet.toString();
  }

  let wordLength=1+Math.floor(Math.random()*9)
  let word="";

  for(let i=0;i<wordLength;i++){
    let alphabet=alphabetGenerator();
    word=alphabet+word;
   }

   return word;

}

const randomWordsGenerator=(num)=>{
  let words="";
  for(let i=0;i<num;i++){
    words=words+ " " +randomWordGenerator();
  }
  return words;

}

export default randomWordsGenerator;

  const randomParaGenerator=()=>{
    let paraLength=100+Math.floor(Math.random()*100)
    let para=""
    for(let i=0;i<paraLength;i++){
      para=para+" " +randomWordGenerator();
    }
    return para;
  }
  
   export const randomParasGenerator=(num)=>{
    let paras=[]
    for(let i=0;i<num;i++){
       paras.push(randomParaGenerator());


    }
    return paras;

  }
  
  


