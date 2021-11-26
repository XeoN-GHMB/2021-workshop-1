const firstapp = {
    setup(){
        function updateIndex(idx){
            state.active_variant_index=idx;
        }

        const state = Vue.reactive({
            active_variant_index:0,
            active_variant: Vue.computed(()=>state.variants[state.active_variant_index]),
            variants:[
                {"name":"Apfelkuchen",
                "image":"static/imgs/apfelkuchen.png",
                "descr":"Wenn sauer mal nicht lustig macht, kommen JellyBelly Zitrone ins Spiel. Sie sind von außen süß und von innen sauer und schmecken wie sie aussehen, einfach zitronig-frisch. In der Kombination mit zwei Coconut-JellyBellys auch als Zitronenbaiser zu vernaschen.",
                "taste":"ist ok",
                "color":"Grün",
                "limited":false,
                "rarity":3,
                "amount":99},
                {"name":"InselPunsch",
                "image":"static/imgs/inselpunsch.jpg",
                "descr":"Gab nur fingern zur oha ordnung namlich. Glatter wir gut ans ihr gelegen sagerei bildnis spatzen lacheln. Verbergend pa geschwatzt drechslers unsicherer so se verstehsts regungslos ri. Fu sofort ja ungern besser. Fluchtigen zog tag lattenzaun und erhaltenen wir marktplatz hereintrat grundstuck. Las dahin sunde ans glitt. So kleine bi gefegt braves in bilder seinen morgen da. Kissen feinen ordnen so so im jemand sterne er.",
                "taste":"lecker",
                "color":"Aqua",
                "limited":false,
                "rarity":4,
                "amount":50},
                {"name":"Zimtzauber",
                "image":"static/imgs/zimtzauber.jpg",
                "descr":"Bello nie gru pfiff weg leuen. Plotzlich kindliche abstellte ton leuchtete das geheimnis mudigkeit. Tat sag marktplatz hob nachmittag und angenommen wohlgefuhl gesprachig augenblick. Filz feld ehre zeit auch ihr alt aber geh. Leeren weg lustig tod gewann armeln neu hatten. Wu ob euren durch dampf so sunde klage.",
                "taste":"neee",
                "color":"Orange",
                "limited":true,
                "rarity":2,
                "amount":10},
                {"name":"Zuckerwatte",
                "image":"static/imgs/zuckerwatte.jpg",
                "descr":"Bello nie gru pfiff weg leuen. Plotzlich kindliche abstellte ton leuchtete das geheimnis mudigkeit. Tat sag marktplatz hob nachmittag und angenommen wohlgefuhl gesprachig augenblick. Filz feld ehre zeit auch ihr alt aber geh. Leeren weg lustig tod gewann armeln neu hatten. Wu ob euren durch dampf so sunde klage.",
                "taste":"zum reinlegen",
                "color":"Pink",
                "limited":false,
                "rarity":1,
                "amount":0}
            ]
        })

        return {
            state,
            updateIndex
        }
    }
}

const vueapp = Vue.createApp(firstapp)
vueapp.mount("#vue")