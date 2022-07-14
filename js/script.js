console.log('vue Ok' , Vue);

Vue.config.devtools = true;

const app = new Vue({
    el : '#root',
    data : {
        avatarPhoto:'',
        user: {
          name: 'Nome Utente',
          avatar: '_io'
        },
        contacts: [
          {
            name: 'Michele',
            avatar: '_1',
          },
          {
            name: 'Fabio',
            avatar: '_2',
          },
          {
            name: 'Samuele',
            avatar: '_3',
          },
          {
            name: 'Luisa',
            avatar: '_4',
          },
        ]
    },
    computed:{
        createAvatarPhoto(){
            let avatarPhoto = 'img/avatar.'
            for(contact in contacts){
                avatarPhoto += contact.avatar +'.jpg'
                return avatarPhoto;
            }
        }
    },
    methods:{

    }
});