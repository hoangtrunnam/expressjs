const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete');



const Course = new Schema({
    name: { type: String, default: '', maxlength: 1000 },
    description: { type: String},
    image: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String },
    level: { type: String },
}, {timestamps: true});

Course.plugin(mongooseDelete, {overrideMethods: 'all', deletedAt: true})
mongoose.plugin(slug)

module.exports = mongoose.model('Course', Course);
