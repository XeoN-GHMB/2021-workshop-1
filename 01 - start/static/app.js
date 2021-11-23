const firstapp = {
    setup(){
        return {
            title:"Vue",

        }
    }
}

const vueapp = Vue.createApp(firstapp)
vueapp.mount("#vue")