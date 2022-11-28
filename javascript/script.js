var btn=document.getElementById('btn');
btn.addEventListener('click',addActivity);
var n=0;

function addActivity()
{
    var activity=document.getElementById('activity').value;
    validate(activity);
     
        document.querySelector('.warning').innerText="";
        var ul=document.querySelector('ul');

        var li=document.createElement('li');

        var btn1=document.createElement('button');
        var btn2=document.createElement('button');
        var p=document.createElement('p');
        
        btn1.setAttribute('class','btn1');
        btn2.setAttribute('class','btn2');
        
        btn1.setAttribute('onclick','deleteitem(this)');
        btn2.setAttribute('onclick','updateitem(this)');
        
         btn1.innerText='delete';
         btn2.innerText='edit';
         p.innerText=activity;
        
         var i=0;
         for(i=0;i<6;i++)
         {
            ul.append(li);
            
         }
         
    var createdLi=document.querySelectorAll('li');
    for(i=0;i<6;i++)
    {
        createdLi[i].appendChild(p);
        createdLi[i].appendChild(btn1);
        createdLi[i].appendChild(btn2);
    }}   

 function deleteitem(element){
    var parent=element.parentElement;
    parent.remove();
 }


 function updateitem(element){
    var parent=element.parentElement;
    parent.innerText=window.prompt("correct item");
 }

 function validate(activity){   
    if(!activity)
    {
        document.querySelector('.warning').innerText='enter any activity';
    }
   n++;
   if(n>=2)
   {
    //code for ensuring that activity entered is not the same
   }
   if(n==5)
   {
    
    btn.removeEventListener('click',addActivity);
   }
 }