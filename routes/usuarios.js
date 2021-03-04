const {Router} = require('express');
const {
     usuariosGet,
      usuariosDelete,
      usuariosPatch,
      usuariosPost,
      usuariosPut } = require('../controllers/usuarios');


const router = Router();




router.get('/', usuariosGet);
router.post('/', usuariosPost);

router.put('/:id', usuariosPut);


router.patch('/', usuariosPatch);
router.delete('/', usuariosDelete);


















// router.put('/', (req, res) => {
//     res.json({
//         msg: 'put api'
//     });
// });
// router.post('/', (req, res) => {
//     res.json({
//         msg: 'psot api'
//     });
// });
// router.delete('/', (req, res) => {
//     res.json({
//         msg: 'delete api'
//     });
// });
// router.patch('/', (req, res) => {
//     res.json({
//         msg: 'delete api'
//     });
// })











module.exports = router;