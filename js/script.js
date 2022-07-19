console.log('vue Ok' , Vue);

Vue.config.devtools = true;

const app = new Vue({
    el : '#root',
    data : {
      currentIndex: 0,
      newText:'',
      searchText:'',
      user: {
        name: 'Annalisa',
        avatar: '_io'
      },
      contacts: [
        {
          name: 'Michele',
          avatar: '_1',
          visible: true,
          messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
          ],
        },
        {
          name: 'Fabio',
          avatar: '_2',
          visible: true,
          messages: [{
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'received'
          }
          ],
        },
        {
          name: 'Samuele',
          avatar: '_3',
          visible: true,
          messages: [{
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
          ],
          
        },
        {
          name: 'Luis',
          avatar: '_4',
          visible: true,
          messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
          ],
        },
      ]
    },
    computed:{
      // a computed wich gives me a filtered array for the search bar in the contacts
      filteredContacts(){
        return this.contacts.map(contact => {
          contact.visible = contact.name.toLowerCase().includes(this.searchText.toLowerCase());
          return contact;
        });
      },
      lastAccess(){
        const messageArray = this.contacts[this.currentIndex].messages;

        return  messageArray[messageArray.length-1].date;
        
      },
    },


    methods:{
      // builder for the image search in the html 
      buildSrc:avatar => `img/avatar${avatar}.jpg`,

      toggleVisibility(i) {
        this.currentIndex = i;
        
      },
      // method to add a new message to the conversation 
      addMessage(text,status){
        const newMessage = {
          text : text,
          status : status,
          date : dayjs().format('DD/MM/YYYY HH:mm:ss'),
        }
        this.contacts[this.currentIndex].messages.push(newMessage);
      }, 
      // method that aply add message when i press enter on the input camp on the application 
      sendMessage(){
        if(!this.newText) return ;

        this.addMessage(this.newText, 'sent' );
        
        this.newText = '';

        this.autoReply();
      },
      // auto reply to messages 
      autoReply(){
        setTimeout(()=> this.addMessage('ok', 'received'), 2000);
      },
      // method that filters the contact to be aplied in the computed above 
      filterContacts(name){
        for (contact in this.contacts){
          
          contact.name.includes(name);
        }
        
        return this.contact;
      },
      getLastAccess(i){
        const messageArray = this.contacts[i].messages;

        return  messageArray[messageArray.length-1].date;
        
      },
    },
});




// TODO : bonus last message!!

