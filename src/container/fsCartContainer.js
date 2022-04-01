const fs = require('fs')


class FsCartContainer {
    constructor(archivo){
        this.archivo = archivo
    }

    getAll = async () => {
        try {
            const getCarts = await fs.promises.readFile( process.cwd()+this.archivo,'utf-8')
            const carts = JSON.parse(getCarts)
            return {
                status: 'success',
                payload: carts
            }
        } catch (error) {
            console.log(error)
        }
    }

    addProduct = async (cartID, products) => {
        try {
            const getCarts = await fs.promises.readFile( process.cwd()+this.archivo,'utf-8')
            const carts = JSON.parse(getCarts)

            for(let i in carts){
                console.log(carts[i]);
                if(carts[i].Id === Number(cartID))
                    carts[i].productID.push(products)
            }
        
            fs.promises.writeFile(process.cwd()+this.archivo,JSON.stringify(carts,null,2))

            return {
                status: 'success',
                payload: carts
            }
        } catch (error) {
            console.log(error)
        }
    }

    deleteCart = async (cartID) => {
        try {
            const getCarts = await fs.promises.readFile( process.cwd()+this.archivo,'utf-8')
            const carts = JSON.parse(getCarts)
        
            for(let i in carts){
                if(carts[i].Id === Number(cartID))
                carts.splice(i, 1)
            }
        
            fs.promises.writeFile(process.cwd()+this.archivo,JSON.stringify(carts,null,2))

            return {
                status: 'success',
                payload: carts
            }
        } catch (error) {
            console.log(error)
        }
    }

	deleteProduct = async (cartID, productID) =>{
        try {
            const getCarts = await fs.promises.readFile( process.cwd()+this.archivo,'utf-8')
            const carts = JSON.parse(getCarts)
        
            for(let i in carts){
                if(carts[i].Id === Number(cartID)){
                    for(let x in carts[i].productID){
                        if(carts[i].productID[x] === Number(productID)){
                            carts[i].productID.splice(x, 1)
                        }
                    }
                }
            }

            fs.promises.writeFile(process.cwd()+this.archivo,JSON.stringify(carts,null,2))
            return {
                status: 'success',
                payload: carts
            }
        } catch (error) {
            console.log(error)
        }
	}

    // Pasarle { "productId":[32,81,332]}
    addCart = async (cart) =>{
        try {
            const getCarts = await fs.promises.readFile( process.cwd()+this.archivo,'utf-8')
            const carts = JSON.parse(getCarts)
        
            cart.Id = carts.length + 1
        
            carts.push(cart)

            fs.promises.writeFile(process.cwd()+this.archivo,JSON.stringify(carts,null,2))
            return {
                status: 'success',
                payload: carts
            }
        } catch (error) {
            console.log(error)
        }
	}
}

module.exports = FsCartContainer