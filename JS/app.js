//Vue Router
const Home = { template: /*html*/
    
    `<div class="col-12 text-center">
      <h1 class="bg-danger text-light m-4 rounded-2 p-2">Venta de videojuegos</h1>
    </div>
      <productos />
    <hr>
    `
  
  }
  const Productos = { template: /*html*/

    `<div class="col-12 text-center">
      <h1 class="bg-danger text-light m-4 rounded-2 p-2">Productos</h1>
    </div>
    <div class="col-12">
      <Vista></Vista>
    </div>
    `
    
  }

//Rutas
const routes = [
    { path: '/', component: Home },
    { path: '/productos', component: Productos }
]

//Instancia Router
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
  
})

//Vue
const data = Vue.createApp({ 
});

//Store
data.use(store)

//Router
data.use(router)