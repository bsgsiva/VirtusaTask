const express = require('express')
 const splice=  require('./utils/splice')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())


app.post('/api/v1/parse', async (req, res) => {
      try {
        const user =  (req.body)
           const result = user.data.split('0000', 3)
           const userObj= {
               statusCode: 200,
               data:{
                firstName:result[0] + '0000',
                lastName:result[1] + '0000',
                clientId:result[2]

               }
            
          }
        res.status(200).send(userObj)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.post('/api/v2/parse', async (req, res) => {
    try {
      const user =  (req.body)
         const result = user.data.split('0000', 3)
           
         const userObj= {
             statusCode: 200,
             data:{
              firstName:result[0],
              lastName:result[1],
              clientId:result[2].splice(3, 0, "-")

             }
          
        }
      res.status(200).send(userObj)
  } catch (e) {
      res.status(400).send(e)
  }
})





app.listen(port, () => {
    console.log('Server is up on port ' + port)
})