
const app=Vue.createApp({
    data(){
        return{
            title:"vue.js 1st day",
            content:"hello world",
            w3school:{
                title:"learning   platform",
                target:"_blank",
                url:"https://www.w3schools.com",
                alt:"the best learning platform",
            },

            workhard:"pogace",
            coords:{
                x:0,
                y:0,

            },
        };
    },
    methods:{
        changeTitle(pTitle) {
     
            this.title=pTitle;
        
        },
        updateCoords(message, event){
       this.changeTitle(`${event.x},${event.y}`);    
       this.coords={
        x:event.x,
        y:event.y,
       };

        }, 
    },
    
}).mount("#app");