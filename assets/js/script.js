const close_menu = document.querySelector('#close_menu_mobile');
const open_menu = document.querySelector('#open_menu');
const menu_chat = document.querySelector('.menu_chat');

const chats_contacts = document.querySelectorAll('.contact_single'); //os chats dos contatos
const btn_send_msg = document.querySelector('#btn_send_msg'); //botao do chat
const content_msg = document.querySelector('.content_msg_receive'); //espaço para ac mensagem
const input_msg_field = document.querySelector('.input_msg_field #input_msg');
const open_menu_desktop = document.querySelector('#open_menu_desktop');

close_menu.addEventListener('click', () => {

    menu_chat.classList.remove('menu_chat_open');

});
open_menu.addEventListener('click', () => {

    menu_chat.classList.add('menu_chat_open');

});


function sendMsg(){

    let msg = input_msg_field.value;

    if(msg != ""){

        if(msg.charAt(0) == "\n"){
            console.log(msg.charAt(0));
            input_msg_field.value == "";
        }else{
            //cria o elemento de linha dentro da div de conversa
            let block_row = document.createElement('div');
            block_row.classList.add('row_msg_me');

            let dialog_msg = document.createElement('div');
            dialog_msg.classList.add('dialog_msg');
            dialog_msg.innerText = msg;

            block_row.append(dialog_msg);

            content_msg.appendChild(block_row);

            console.log(msg);
            input_msg_field.value = "";
            input_msg_field.value.replace("\n", "");

        }

        
    }

}

input_msg_field.addEventListener('focus', function(){

    input_msg_field.addEventListener('keyup', function(e){
   
        if(e.code == "Enter"){
            if(input_msg_field.value.charAt(0) == "\n"){
                input_msg_field.value == "";
                input_msg_field.value.replace(/(\r\n|\n|\r)/gm, "");
                input_msg_field.blur();
    
            }else{
                if(e.code == "Enter" && input_msg_field.value != ""){
                    sendMsg();
                }
            }
        }   
        
       console.log(input_msg_field.value);
    });
  
})



//função que extrai os nomes e cria as thumbnails de nome
function getName(name){

    let name_string = name.split(' ');

    let name_final = "";

    for(let i = 0; (i < name_string.length)  && ( i < 2); i++){

        name_final += name_string[i].charAt(0);

    }

    return name_final;
    
}

//===================================================================

//===================================================================

function addThumbName(){
    const names_users =     
    
    chats_contacts.forEach((item) => {

        let thumb = item.querySelector('.thumb_single_contact .thumbname');

 

        if(thumb){
            item.querySelector('.thumb_single_contact .thumbname').innerHTML = getName(item.querySelector('.contact_single_info h4').innerHTML);
            console.log(item.querySelector('.contact_single_info h4').innerHTML)
        }

    });
}
addThumbName()


chats_contacts.forEach((item) => {

    item.addEventListener('click',() => {

        document.querySelector('.photo_chat .contact_single_info h4').innerText = item.querySelector('.contact_single_info h4').innerHTML;
        document.querySelector('.photo_chat .thumb_contact').innerHTML = item.querySelector('.thumb_single_contact').innerHTML;
        document.querySelector('.content_msg .content_msg_receive').innerHTML = "";

        chats_contacts.forEach((item) => {
            item.classList.remove('active_chat');
        });

        item.classList.add('active_chat');

    });

});


/*
function searchUser(){

    let search_users =  document.querySelector('#search_users').value;

    console.log(search_users.value);
    
    document.querySelectorAll('.contact_single .contact_single_info h4');

    document.querySelector('.list_contact_content').innerHTML = "";

    chats_contacts.forEach((item) => {

        let name_contato = item.querySelector('.contact_single_info h4').innerHTML;

        console.log(name_contato);

        if(name_contato.includes(search_users)){
            console.log('contem')
        }

    });
}
*/

open_menu_desktop.addEventListener('click', function(){

    open_menu_desktop.classList.toggle('reto');
    document.querySelector('.menu_chat').classList.toggle('menu_chat_open');
    document.querySelector('.list_contact').classList.toggle('f-100');

});

if(window.matchMedia('(max-width: 768px)').matches){

    chats_contacts.forEach((item) => {

        item.addEventListener('click', function(){

            document.querySelector('.board_right').classList.toggle('board_right_mobile');

        });

    });
    document.querySelector('.return_contacts').addEventListener('click', function(){
        document.querySelector('.board_right').classList.toggle('board_right_mobile');

    });

    document.querySelector('.open_over').addEventListener('click', function(){

        this.classList.remove('open_over_open');
        document.querySelector('.icons_chat_active').classList.remove('icons_chat_active_open');


    });
    document.getElementById('open_menu_icon_chat').addEventListener('click', function(){

        document.querySelector('.open_over').classList.add('open_over_open');
        document.querySelector('.icons_chat_active').classList.add('icons_chat_active_open');

    });
}