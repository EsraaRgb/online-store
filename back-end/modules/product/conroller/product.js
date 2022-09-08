import sql from '../../../DB/connection.js'

export const addProduct = (req, res) => {
    const { productName, productDesc, productPrice, userID } = req.body
    sql.execute(`insert into products (productName, productDesc, productPrice, userID) values ('${productName}','${productDesc}',${productPrice},${userID})`,
        (err, result) => {
            if (!err) {
                res.json({ message: "Done", result })
            } else {
                res.json({ message: "Query error", err })
            }
        })
}
export const getProductByID = (req,res)=>{
    const {id} =req.params;
    sql.execute(`select * from products where products.productID = ${id}`,(err,result)=>{
        if (!err) {
            res.json({ message: "Done", result })

        } else {
            res.json({ message: "Query error", err })

        }
    })

}
export const updateProduct = (req, res) => {
    const { id } = req.params
    const { productName, productDesc, productPrice } = req.body
    sql.execute(`update products set productName = '${productName}', productDesc = '${productDesc}', productPrice = ${productPrice} where productID = ${id}`,
        (err, result) => {
            if (!err) {
                if (result.affectedRows) {
                    res.json({ message: "Done", result })
                }
                else {
                    res.json({ message: "In-valid product", err })
                }
            } else {
                res.json({ message: "Query error", err })
            }
        })
}
export const serachProductByName = (req, res) => {
    const { name } = req.query
    sql.execute(`select * from products join users on users.userID =  products.userID where products.productName like '${name}%'`,(err,result)=>{
        if (!err) {
            res.json({ message: "Done", result })

        } else {
            res.json({ message: "Query error", err })

        }
    })

}
export const deleteProduct = (req, res) => {
    const { id } = req.params
    sql.execute(`delete from products where productID = ${id}`, (err, result) => {
        if (!err) {
            if(result.affectedRows){
                res.json({ message: "Done", result })
            }
            else {
                res.json({ message: "In-valid product", err })
            }

        } else {
            res.json({ message: "Query error", err })

        }
    })

}

export const getAllProducts = (req,res)=>{
    sql.execute(`select * from products inner join users on users.userID =  products.userID `,(err,result)=>{
        if (!err) {
            res.json({ message: "Done", result })

        } else {
            res.json({ message: "Query error", err })

        }
    })
}