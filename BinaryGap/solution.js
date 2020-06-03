function solution(N){

    let arr = Array.from(N.toString(2));
    let maxGap = 0;
    let currentGap = 0;
    
      for(let i = 0; i<arr.length; i++){
        if(arr[i]==='0'){
          currentGap++;
    
        } else if(arr[i]==='1'){
          if(currentGap>maxGap){
          maxGap=currentGap;
          currentGap = 0;
          }else {
            currentGap = 0;
          }
        
        }
        
      }
      return maxGap;
    }
    
    
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }  
    
    for (let i = 0; i< 20; i++){
      let number = getRandomInt(2147483647);
      console.log(number,'=',solution(number));
    }
    