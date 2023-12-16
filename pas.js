var count=0;
let num=1;
let arr=[];
let input=document.getElementById("input");
let but=document.getElementById("push");
let input1=input.value;
let y=Number(input.value);
function click1(){
    if(count<5){
        let box=document.createElement("p");
    box.className="bx";
    box.id=`bx${num}`;
    box.innerText=input.value;
    document.getElementById("box").append(box);
    console.log("Hello");
    count++;
    num++;
    arr.push(Number(input.value));
    console.log(arr[arr.length-1]);
    }
    else if(count>=5){
        alert("Over_Flow")
    }
}
function pop1(){
  if(arr.length){
    let val=document.getElementById(`bx${arr.length}`);
    val.style.backgroundColor="red";
    setTimeout(function(){
        num--;
        count--;
        val.remove();
        arr.pop();
    },1000);
   
  }
  else{
   alert("Already Empty");
  }
}