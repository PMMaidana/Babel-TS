class Productos{
    constructor(){
        this.productos = [];
    }

    listar(){        
        return this.productos;
    }

    listarPorId(id){
        let producto = this.productos.find(e => e.id === id);
        if(producto==undefined){
            producto = 'Producto no encontrado';
        }
        return producto;
    }

    guardar(producto){
        const largo = this.productos.length;
        this.productos.push({...producto,id:largo+1});
        return this.productos[largo];
    }
       
    borrar(id){
        try {
            const producto = this.productos.find(item => item.id == id);
            this.productos = this.productos.filter(a => a.id != id);
            return producto;
        } catch (error) {
            return [{
                error: error
            }];
        }
    }

    actualizar(id, producto){
        try {
            const indice = this.productos.findIndex(item => item.id == id);
            this.productos[indice].title = producto.title;
            this.productos[indice].price = producto.price;
            this.productos[indice].thumbnail = producto.thumbnail;
            return this.productos[indice];
        } catch (error) {
            return [{
                error: error
            }];
        }
    }
}

module.exports = new Productos();