const firstapp = {
    setup(){
        return {
            title:"Vue",
            light:"red"
        }
    }
}

const vueapp = Vue.createApp(firstapp)
vueapp.mount("#vue")