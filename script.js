// Print odds 1-20
function oddNum(){
    for (let i = 0; i< 21; i++) {
        if (i%2 != 0){
            console.log(i);
        }    
    }
    
}
// Decreasing Multiples of 3 all of the values that are evenly divisible by 3 from 100 down to 0.
function num100to3(){
    for(let i=100; i>=0; i--){
        if(i%3 ==0){
            console.log(i);
        }
    }
}

// Print the sequence:Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

function sequence(){
    for(let i=4; i>-4; i-=1.5){
        console.log(i)
    }
}

// Sigma

function Sigma(){
    var sum=0;
    for(let i=0; i<101; i++){
    sum+=i;
    }
    console.log(sum)
}

// Factorial

function Factorial(){
    var product=1;
    for(let i=1; i<13; i++){
        product= product*i;
    }
    console.log(product)
}
