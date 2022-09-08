import sql from "../../../DB/connection.js";

const signUp =  (req, res) => {
    const { userName, email, password, age } = req.body
    sql.query(`select * from users where email = '${email}'`,(err,result)=>{
        if (!err) {
            if (result.length) {
                res.json({message:"email is already exist",result})
            }
             else {
                sql.execute(`insert into users (userName, email, password, age) values('${userName}','${email}','${password}',${age})`,(err,result)=>{
                    if (!err) {
                        res.json({message:"Done",result})
                    } else {
                        res.json({message:"Query error 1"})
                    }
                })
            }
        } 
        else {
            res.json({message:"Query error 2"})
        }

    })

}
const signIn = (req, res) => {
    const { email, password } = req.body
    sql.query(`select * from users where email = '${email}' AND password = '${password}'`, (err, result) => {
        if (!err) {
            if (result) {
                res.json({ message: "Done", result })
            } else {
                res.json({ message: "In-valid email or password" })
            }
        }
        else {
            res.json({ message: "Query error" })
        }
    })

}

export default {
    signUp,
    signIn,

}

