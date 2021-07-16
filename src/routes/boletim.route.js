import express from 'express'
import { BoletimController } from '../controllers'
const router = express.Router()

router
  .route('/boletim')
  .get(BoletimController.getLatest)
  .post(BoletimController.create)

router.route('/generateReport/:id').get(BoletimController.generateReport)
router.route('/boletim/:id').get(BoletimController.getById)

export default router
