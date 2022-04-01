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

    // addProduct = async (product) => {
    //     try {
    //         const getProducts = await fs.promises.readFile(process.cwd()+this.archivo, 'utf-8')
    //         let getProductsObj = JSON.parse(getProducts)
    //         let newId = Object.keys(getProductsObj).length + 1
        
    //         if([Object.keys(getProductsObj).length] > 0){
    //             product[Object.keys(getProductsObj).length - 1].timestamp = Date.now()
    //             product[Object.keys(getProductsObj).length - 1].id = newId
    //         }
    //         else{
    //             product[Object.keys(getProductsObj).length].timestamp = Date.now()
    //             product[Object.keys(getProductsObj).length].id = newId
    //         }
    //         getProductsObj.push(product)
    //         fs.promises.writeFile(process.cwd()+this.archivo,JSON.stringify(getProductsObj,null,2))

    //         return {
    //             status: 'success',
    //             payload: getProducts
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

	// deleteProduct = async (productID) =>{
    //     const getProducts = await fs.promises.readFile(process.cwd()+this.archivo, 'utf-8')
    //     let getProductsObj = JSON.parse(getProducts)

    //     try {
    //         for(let i in getProductsObj){
    //             if(parseInt(getProductsObj[i].id) === parseInt(productID))
    //                 getProductsObj.splice(i, 1)
    //         }
    //         fs.promises.writeFile(process.cwd()+this.archivo,JSON.stringify(getProductsObj,null,2))
    //         return {
    //             status: 'success',
    //             payload: getProductsObj
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
	// }

    // updateProduct = async (update,productID) =>{
    //     let productIDInt = Number(productID) -1
    //     const getProducts = await fs.promises.readFile(process.cwd()+this.archivo, 'utf-8')
    //     let getProductsObj = JSON.parse(getProducts)
    //     try {
    //         for(let i in getProductsObj){
    //             if(parseInt(getProductsObj[i].id) === parseInt(productID)){
    //                 for(let x in getProductsObj[i]){
    //                     if(Object.keys(getProductsObj[i])[x] == JSON.stringify(Object.keys(update)[0])){
    //                         getProductsObj[i][x] = Object.values(update)[0]
    //                     }
    //                 }
    //             }
    //         }
    //         fs.promises.writeFile(process.cwd()+this.archivo,JSON.stringify(getProductsObj,null,2))
    //         return {
    //             status: 'success',
    //             payload: getProductsObj
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
	// }
}

module.exports = FsCartContainer