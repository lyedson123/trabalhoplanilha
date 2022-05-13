document.querySelector("#soma").addEventListener

('click',(event)=>{

    event.preventDefault();
    let v1=document.querySelector("#n1").value;
    let v2=document.querySelector("#n2").value;
    let v3=document.querySelector("#n3").value;
    let v5=document.querySelector("#n5").value;
    let v6=document.querySelector("#n6").value;
   

    let v= Number(v5)+ Number(v6);
    document.querySelector("#n7").value=v;

    let l= Number(v1)+ Number(v2)+ Number(v3);
    document.querySelector("#n4").value = l;

    let total= Number(l)-Number(v);
    document.querySelector("#n8").value=total;
});
document.querySelector("#apagar").addEventListener
('click',(event)=>{

    event.preventDefault();
limpar()


});

function limpar(){
    let v1=document.querySelector("#n1").value="";
    let v2=document.querySelector("#n2").value="";
    let v3=document.querySelector("#n3").value="";
    let v5=document.querySelector("#n5").value="";
    let v6=document.querySelector("#n6").value="";
   
   }