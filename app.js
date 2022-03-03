let tags = [];
let tagContainer = document.querySelector('.tag-container');
let input =  document.querySelector('#input');



input.addEventListener('keyup',addTags);

function addTags(event){
    const keyPressedIsEnter = event.key == 'Enter';
    if(keyPressedIsEnter){
       //Quando o botão enter for pressionado
       input.value.split(',').forEach(tag=>{
           if(tag){
               tags.push(tag.trim());
           }
       })

       upDateTags()
       input.value = '';

   
    }  
}

function upDateTags(){
       clearTags();
       tags.slice().reverse( ).forEach(tag =>{
           tagContainer.prepend(createTag(tag));
       }) ;
}

function createTag(tag){
    const div = document.createElement('div');
    div.classList.add('tag');

    const span = document.createElement('span');
    span.innerHTML = tag;
    div.append(span);

    const i = document.createElement('i');
    i.classList.add('icon-close');
    i.classList.add('close');
    i.setAttribute('data-item',tag)

    i.onclick = removeTag;
    span.append(i)

    return div;

}

function removeTag(event){
    const buttonX = event.currentTarget;
    const id = buttonX.dataset.item;
    const index = tags.indexOf(id);
    tags.splice(index,1);
    upDateTags()
}

function clearTags(){
    tagContainer
        .querySelectorAll('.tag')
        .forEach(tagElement=> tagElement.remove())
}


