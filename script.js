let form=document.querySelector('form');
let ul=document.querySelector(".task_list")
form.addEventListener('click',function(e){
 e.preventDefault();
  
  let todo=form.task.value.trim();
  if(todo.length){
    htmltemplete(todo);
    form.reset();
  }
   
})
let htmltemplete=function(todo){
  let li=`<li>${todo}<span class="del">X<span></li>`;
ul.innerHTML+=li;

}
ul.addEventListener('click',function(e){
  if(e.target.classList.contains("del")){
    e.target.parentElement.remove();
  }
})