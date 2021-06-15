data.component('productos', {

    template: /*html*/
    `
    <div class="container-fluid">
        <div class="text-center">
            
            <!--Cuadro-->
            <div class="bg-dark text-light m-3 rounded-2 p-3">
              <h2>Agregar productos</h2>
              <hr>

              <!--Row-->
              <div class="row">
                
                <!--Columna 1-->
                <div class="col-6">
                  
                  <!--Input nombre-->
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Nombre</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Agregar nombre" v-model="nombre">
                  </div>
                  
                  <!--Input género-->
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Género</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Agregar género" v-model="genero">
                  </div>
                  
                  <!--Input imagen-->
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Imagen</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Agregar imagen de carátula" v-model="img">
                  </div>

                </div>
                
                <!--Columna 2-->
                <div class="col-6">
                  
                  <!--Input plataforma-->
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Plataforma</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Agregar plataforma" v-model="plataforma">
                  </div>

                  <!--Input precio-->
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Precio(CLP)</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Agregar precio" v-model="precio">
                  </div>

                  <!--Input estado-->
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Estado</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Agregar estado (En stock o no)" v-model="estado">
                  </div>

                </div>
              <!--CierreRow-->
              </div>

                <!--Botones-->
                <div class="mb-3 col-12 gap-2">
                    <button @click="InsertarVariables" class="btn btn-secondary btn-group-lg fw-bold d-inline-block m-2">Procesar Datos</button>
                    <button @click="Borrar" class="btn btn-danger btn-group-lg fw-bold d-inline-block m-2">Borrar Datos</button>
                </div>

            <!--CierreCuadro-->
            </div>

            <!--VistaDatos-->
            <div class="col-12">
                <Vista/>
            </div>

            <div class="row bg-warning rounded-3 p-3 mt-3">
            <div class="col-12">
                <p class="fs-4 text-dark text-center">Vista Previa del producto:</p>
            </div>
            <table class="table text-dark lead">
                <thead>
                    <tr>
                    <th scope="col">#Id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Plataforma</th>
                    <th scope="col">Genero</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

        <!--CierreTextCenter-->
        </div>
      <!--CierreContainer-->
      </div>
    `,
    data() {
        return {
            id: '',
            nombre: '',
            plataforma: '',
            genero: '',
            precio: '',
            img: '',
            estado: ''
        }
    },
    computed: {
        ...Vuex.mapState(['productos', 'producto']),
        ...Vuex.mapMutations(['nuevoObjeto', 'Insertar'])

    },
    methods: {
        ...mapActions(['setContenedor']),

        InsertarVariables(){

          // creamos 1 objeto para ser insertado en el Array principal:
          let datos = {

              'id': + new Date(),
              'nombre': this.nombre,
              'plataforma': this.plataforma,
              'genero': this.genero,
              'precio': this.precio,
              'img': this.img,
              'estado': this.estado

          }

          //this.nuevoObjeto(datos);

          this.setContenedor(datos);

         // this.Insertar(this.prod);

      },

      Borrar(){
          this.id = '',
          this.nombre = '',
          this.plataforma = '',
          this.img = '',
          this.precio = '',
          this.genero = '',
          this.estado = ''
      }
    }
})