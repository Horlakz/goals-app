const express = require('express')
const router = express.Router()
const { getGoals, setGoal, deleteGoal, updateGoal } = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)

router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

module.exports = router