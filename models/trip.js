import { Schema, model } from 'mongoose';

const ExpenseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
});

const TripSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    destinations: [
        {
            type: String,
            required: true,
            trim: true,
        },
    ],
    budget: BudgetSchema,
    collaborators: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
});

TripSchema.pre("findOneAndUpdate", async function() {
    const expenses = this.getUpdate().budget?.expenses;
    if (expenses?.BudgetSchema) {
        this.getUpdate().budget.spent +=
            expenses.reduce((acc, expense) => acc + expense.amount, 0) || 0;
        expenses.map((expense) => {
            expense.date = new Date();
        });
    }
});

const Trip = model("Trip", TripSchema);

export default Trip;

const Expense = model("Expense", ExpenseSchema);

export default Expense;