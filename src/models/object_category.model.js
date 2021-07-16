import mongoose from 'mongoose'
import objects from '../helpers/object_category';

const ObjectCategorySchema = new mongoose.Schema({
    name: String,
    options: [Object]
})

const ObjectCategory = mongoose.model('object_category', ObjectCategorySchema);

for (let i; i < objects.length; i++){
    let tmp = new ObjectCategory();
    tmp._id = objects[i].value;
    tmp.name = objects[i].text;
    tmp.options = objects[i].options;
    tmp.save();
}

export default ObjectCategory;