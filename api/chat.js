class Chat{
    constructor(){
        this.messages = []
    }

    listar(){
        return this.messages;
    }

    guardar(){
        fs.writeFileSync('./public/archivo.txt', JSON.stringify(messages), (error, contenido) => {
            if (error) {
                console.log('error:', error)
            } else {
                console.log('contenido:', contenido);
            }
        });
    }
    
    leer(){
        fs.readFileSync('./public/archivo.txt', 'utf-8', (error, contenido) => {
        if (error) {
            console.log('error:', error)
        } else {
            console.log('contenido:', contenido);
            return contenido;
        }
        })
    }
}

module.exports = new Chat();