import mongoose from 'mongoose';
import validator from 'validator';

const proSeekSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: false,
        validate: {
            validator: (value) => 
                validator.isEmail(value),
                    message : 'Invalid Email'
            }
           
    },
    phone: {
        type: Number,
        required: true,
        validate: {
            validator: (value) => !value || validator.isMobilePhone(value),
            message: 'Invalid Phone Number'
        }
    },
    country: {
        type: String,
        required: true,
        enum: ['India'],

    },
    state: {
        type: String,
        required: true,
        //States of India
        enum: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', ' Bihar',
            'Chhattisgarh', 'Goa', 'Gujarat', ' Haryana', 'Himachal Pradesh',
            'Jammu and Kashmir', 'Jhark hand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
            'Maharashtra ', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
            'Sikkim', ' Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', ' Uttar Pradesh', 'West Bengal'], 
        
    },
    city: {
        type: String,
        required: true,
    }

        
    }
)