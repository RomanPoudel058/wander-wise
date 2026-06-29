import { Schema, model } from 'mongoose';

const BaggagesSchema = new Schema (
   {
    name: {
        type: String,
        required: true,
        trim: true,
      },
    completed: {
        type: Boolean,
        defult: false,
    }, 
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    trip: {
      type: Schema.Types.ObjectId,
      ref: 'Trip',
      required: true,
    },
   },
   {
        timestamps: true,
    }
);

const Baggages = model("Baggages", BaggagesSchema);

export default Baggages;     
