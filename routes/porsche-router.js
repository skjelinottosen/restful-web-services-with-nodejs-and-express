import express from 'express';
import controller from '../controllers/porsches-controller.js';
const router = express.Router();

function porscheRouter() {
  router.route('/porsches').get(controller.getAll).post(controller.post);

  router
    .route('/porsches/:id')
    .get(controller.getById)
    .put(controller.put)
    .patch(controller.patch)
    .delete(controller.remove);

  return router;
}

export default porscheRouter;
