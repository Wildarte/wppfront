const close_menu = document.querySelector('#close_menu_mobile');
const open_menu = document.querySelector('#open_menu');
const menu_chat = document.querySelector('.menu_chat');

const chats_contacts = document.querySelectorAll('.contact_single'); //os chats dos contatos
const btn_send_msg = document.querySelector('#btn_send_msg'); //botao do chat
const content_msg = document.querySelector('.content_msg_receive'); //espaço para ac mensagem
const input_msg_field = document.querySelector('.input_msg_field #input_msg');

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

    input_msg_field.addEventListener('keypress', function(e){
   
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