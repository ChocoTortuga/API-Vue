const store = new Vuex.Store({
    state:{
        productos: [],
        prods: []
    },
    mutations:{
        InsertarProducto(state, payload){
            state.prod = payload
            console.log('prod: ', state.prod)
        },
        
        async obtenerProductos(state){
            
            await fetch('https://contenedor-de-productos-default-rtdb.firebaseio.com/videojuegos.json', {
                method: 'GET',
                headers:{
                    'Content-type':'application/json'
                }
            })
            .then(response => response.json())
            .then(data => (state.productos = data))
            .catch(error => console.log(error))

            console.log('Productos: ', state.productos)
            
        },
        
        async guardarProductos(state, videojuegos){
            await fetch('https://contenedor-de-productos-default-rtdb.firebaseio.com/videojuegos.json', {
                method: 'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify(videojuegos)
            })
            .then(response => response.json())
            .then(data => (state.productos = data))
            .then(console.log('Productos: ',state.productos))
            .catch(error => console.log(error))
        },
        
        borrarElemento(state){
            console.log('prods actualizados: ', state.productos)
        },

        borrarProducto(state, id) {
            console.log('id: ',id)

            fetch(`https://contenedor-de-productos-default-rtdb.firebaseio.com/videojuegos/${id}.json`, {
                method: 'DELETE',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify(videojuegos)
            })
            .then(response => response.json())
            .catch(error => console.log(error))

            console.log('producto eliminado: ',state.productos[id].nombre)
        },

        async actualizarProductos(state, id){
            console.log('id: ', id)

            await fetch(`https://contenedor-de-productos-default-rtdb.firebaseio.com/videojuegos/${id}.json`, {
                method: 'PATCH',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify(id)
            })
            .then(response => response.json())
            .then(data => (state.productos = data))
            .catch(error => console.log(error))

            console.log('producto actualizado: ',state.productos[id.nombre])
        }

    },
    actions:{
        async borrarProducto({commit}, id){
            console.log('id: ',id)
            
                await fetch(`https://contenedor-de-productos-default-rtdb.firebaseio.com/videojuegos/${id}.json`, {
                    method: 'DELETE',
                    headers:{
                        'Content-type':'Applications/json'
                    },
                    body: JSON.stringify(id)
                })
                .then(response => response.json())
                .then(() => {
                commit('borrarElemento')
                })
                .catch(error => console.log(error))
        }
    }
    
})