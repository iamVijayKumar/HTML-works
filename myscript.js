var p=0;
function Add(){
    var a=document.getElementById("var").value;
    
    var b=document.createElement("li");
    var c=document.createTextNode(a);
    b.appendChild(c);
    if(a===''){
        alert("enter valid task");
    }
    else{
    document.getElementById("list").appendChild(b);
    Buttons(p);
    p=p+1;
    }
    var d=document.getElementById("list").getElementsByTagName('li');
    console.log(d.length);
    for(var i=0;i<d.length;i++){
       
        var x = Math.floor(Math.random() * 256);    
         var y = Math.floor(Math.random() * 256);    
          var z = Math.floor(Math.random() * 256);     
          var bgColor = "rgb(" + x + "," + y + "," + z + ")"; 
           
    
        d[i].style.backgroundColor=bgColor;
        d[i].style.fontSize="x-large";

    }
}
function Buttons(k){
    console.log(k);
    var x=document.getElementsByTagName("LI");
    var p=document.createElement("span");
    var q=document.createTextNode("X");
    p.className="btn btn-danger";
    p.name="remove";
    p.appendChild(q);
    x[k].appendChild(p);
    var m=document.getElementsByClassName("btn btn-danger");
    for(i=0;i<m.length;i++){ 
        m[i].onclick=function(){
            var n=this.parentElement;
            n.style.display="none";
        }
    }
    var g=document.createElement("span");
    var h=document.createTextNode("\u2713");
    g.className="btn btn-success";
    g.appendChild(h);
    x[k].appendChild(g);
    var m=document.getElementsByClassName("btn btn-success");
    for(i=0;i<m.length;i++){ 
        m[i].onclick=function(){
            var n=this.parentElements;
            if(n.style.textDecoration!="line-through"){
            n.style.textDecoration="line-through";
            }
            else{
                n.style.textDecoration="none";
            }
        }
    }


}

function calC(i){
    let a=Number(document.getElementById("num1").value);
    let b=Number(document.getElementById("num2").value);
    console.log(a);

        if(i==='add'){
            let c=(a+b);
            console.log(c);
            document.getElementById("res").value=c;
        }
        else if(i==="sub"){
            console.log(a-b);
            let c=a-b;
            document.getElementById("res").value=c;
        }
        else if(i==="mul"){
            let c=a*b;
            document.getElementById("res").value=c;
        }else if(i==="div"){
            if(b==0){
                alert("Enter Valid Number");
            }
            else{
            let c=a/b;
            document.getElementById("res").value=c;
            }
        }

}
function opendiv(i){
    var c="work"+i;
    var x=document.getElementById(c);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    for(let j=1;j<5;j++){
        if(j!=i){
            var d= "work"+j;
            console.log(d)
            var y=document.getElementById(d);
            y.style.display="none";
        }
    }
    
}
function Arith(i){
    if(i==='='){
    var c=document.getElementById("demo").innerText;
    console.log(eval(c));
    document.getElementById("calc").value=eval(c);
    }
    else{
    document.getElementById("demo").innerHTML+=i;
    }
}
function Clear(i){
    var k=document.getElementById("demo").innerText;
    if(i==='X'){
    console.log(k);
    var p=k.slice(0,-1);
    document.getElementById("demo").innerHTML=p;
    }
    else if(i==='C'){
    document.getElementById("demo").innerHTML="";
    }

}

function clock(){
    let k=new Date();
    let d=document.getElementById("days").value;
    let c=document.getElementById("min").value;
    let m=document.getElementById("hour").value;
    if(d>365 || c>59 || m>23){
        alert("days must be less than 365"+"\n"+" hours must be less than 24"+"\n"+"minutes must be less than 60");
    }
    else{
        let q=c*60;
        let r=m*60*60;
        let s=d*24*60*60;
        let j=q+r+s;
            if(c==0 && m==0 && d==0){
                alert("enter number");
            }
        else{
        k.setSeconds(k.getSeconds()+(c*60));
        k.setSeconds(k.getSeconds()+(m*60*60));
        var b=setInterval(function (){
            var days=Math.floor(j/(24*60*60))
            var hours=Math.floor((j%(24*60*60))/(60*60));
            var min=Math.floor((j%(60*60))/60);
            var sec=Math.floor((j%(60)));
            document.getElementById("time").innerHTML=days+"d "+hours+"h\n"+min+"m "+sec+"sec";
            j=j-1;
        /* let d=new Date();
        
        let p=k-d;
        console.log(p);
        var hours=Math.floor(p/(1000*60*60));
        var min=Math.floor((p%(1000*60*60))/(1000*60));
        var sec=Math.floor((p%(1000*60))/1000);
        document.getElementById("demo").innerHTML=hours+"h "+min+"m "+sec+"sec"; */
        if(j<0){
            clearInterval(b);
            document.getElementById("demo").innerHTML="completed";
        } 
        },1000);  
    } 

}
}