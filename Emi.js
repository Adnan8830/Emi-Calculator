function getAmount(){
    let p,t,r,si,tamt;
    p=pamt.value;
    t=time.value;
    r=roi.value;
    si=p*t*r/100;
    tamt=parseFloat(p)+si;
    interest.value=`Interest Amount : ${si}`;
    totalamt.value=`Total Amount : ${tamt}`;
    
}