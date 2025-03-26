import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "Title must be at least 3 characters long 😊"],
        maxlength: [150, "Title should not exceed 150 characters 😊"],
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: [10, "Description must be at least 10 characters long 😊"],
        maxlength: [500, "Description should not exceed 500 characters 😊"],
    },
    image: [{
        type: String,
    }],
    video: [{
        type: String,
    }],
    location: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true,
        enum: ['India'],

    }
    
});

const Listing = mongoose.model('Listing', listingSchema);
export default Listing;