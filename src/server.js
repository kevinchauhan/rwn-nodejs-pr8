import express from "express";
import categoryRouter from "./routes/category.js";
import dbConnection from "./config/db.js";
import expressEjsLayouts from "express-ejs-layouts";
import subCategoryRouter from "./routes/subcategory.js";
import productRouter from "./routes/product.js";
const app = express()
const PORT = 8000

// db connection
dbConnection()

// parse body
app.use(express.urlencoded({ extended: false }))

// static folder
app.use(express.static('public'))

// express layout
app.use(expressEjsLayouts)
// view engine
app.set('view engine', 'ejs')
// set template
app.set('views', 'src/views')

// routes
app.get('/', (req, res) => {
    res.render('pages/index')
})
app.use('/category', categoryRouter)
app.use('/subcategory', subCategoryRouter)
app.use('/product', productRouter)

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})