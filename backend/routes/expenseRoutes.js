const expenseRouter = require('express').Router();
const expenseController = require('../controllers/expenseController');
const auth = require('../middlewares/authMiddleware');
const roleCheck = require('../middlewares/roleMiddleware');

expenseRouter.post('/add', auth.authenticate, expenseController.addExpense);

expenseRouter.get('/:userId', auth.authenticate, expenseController.getExpenses);

expenseRouter.patch('/edit/:id', auth.authenticate, expenseController.editExpense);

expenseRouter.delete('/delete/:id', auth.authenticate, expenseController.deleteExpense);


module.exports = expenseRouter;