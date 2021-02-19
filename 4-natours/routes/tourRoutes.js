const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router(); // создаем новый router

router.param('id', tourController.checkId); // middleware для конкретного параметра, в данном случае id. val - значение этого параметра

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour); // middleware исполняются по очереди
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
