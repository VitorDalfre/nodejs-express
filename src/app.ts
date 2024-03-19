import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello CodeLAB!')
})

app.listen(port, () => {
  console.log(`Aplicação está escutando a porta ${port}`)
})