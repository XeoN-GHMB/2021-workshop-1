const firstapp = {
    setup(){
        const activelight = "red"

        function getLight(color){
            if(color === activelight){
                return `${color}-light`
            }
            return ''
        }

        return {
            title:"Vue",
            light:activelight,
            getLight
        }
    }
}

const vueapp = Vue.createApp(firstapp)
vueapp.mount("#vue")