const { Paciente, User } = require('../models'); // Asegúrate de importar tus modelos correctamente
const { v4: uuidv4 } = require('uuid');

const registerPaciente = async (req, res) => {
  try {
    // Obtener datos del cuerpo de la solicitud
    const { nombre, apellido } = req.body;

    // Crear un nuevo paciente
    const paciente = await Paciente.create({
      id: uuidv4(), // Generar un nuevo ID único
      nombre,
      apellido,
    });

    // Obtener el usuario actual (puedes cambiar esto según tus necesidades)
    const user = await User.findOne({ where: { id: 'el_id_del_usuario' } });

    // Asociar el paciente con el usuario
    await user.createPaciente(paciente);

    // Enviar respuesta exitosa
    return res.status(201).json({ message: 'Paciente registrado exitosamente', paciente });
  } catch (error) {
    console.error('Error al registrar paciente:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  registerPaciente,
};
