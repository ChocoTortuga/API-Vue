data.component('Vista', {
    template:
    /*html*/
    `
    <div class="row">
            <div class="col-12 text-dark">
                <h1 class="text-center"> Videojuegos agregados</h1>
            </div>
            <div class="row justify-content-center">
                <div v-for="(item, index) in productos" :key="index" class="card list-group-item-warning text-center m-3" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item list-group-item-dark">{{item.id}}</li>
                        <li class="list-group-item list-group-item-dark"><img :src="item.img" class="img-fluid"></li>
                        <li class="list-group-item list-group-item-dark">{{item.nombre}}</li>
                        <li class="list-group-item list-group-item-dark">{{item.plataforma}}</li>
                        <li class="list-group-item list-group-item-dark">{{item.genero}}</li>
                        <li class="list-group-item list-group-item-dark">{{item.estado}}</li>
                        <li class="list-group-item list-group-item-dark">{{item.precio}}</li>
                        <li class="list-group-item list-group-item-dark">               
                        <button @click="borrarProd(index); obtenerProductos();" class="btn btn-danger btn.lg m-1"><i class="icofont-ui-delete"></i></button>
                        <button @click="ActualizarDatos(index); obtenerProductos();" class="btn btn-success btn.lg m-1"><i class="icofont-ui-reply"></i></button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    data() {
        return {
            clave: ''
        }
    },

    computed: {
        ...Vuex.mapState(['productos'])
    },

    created () {
        this.obtenerProductos();
    },

    methods: {
        ...Vuex.mapMutations(['obtenerProductos', 'borrarProducto', 'ActualizarProductos']),

        borrarProd(id){
            this.borrarProducto(id);
            this.obtenerProductos();
        },

        ActualizarDatos(id){
            this.ActualizarProductos(id);
            this.obtenerProductos();
        }
    }
})