import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    subCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subcategories'
    }
})

export default mongoose.model('products', productSchema)