function convert(){
    let temp1=document.getElementById('temp');
    console.log(temp1.value);
    let imps=document.getElementById('inp').value;
    console.log(imps);
    if(temp1.value =='C')
    {
    let cal=(imps*(9/5)+32);
    console.log(cal);
    }
    else
    {
    let cal=((imps-32)*(5/9));
    console.log(cal);
    }
    
    
    }