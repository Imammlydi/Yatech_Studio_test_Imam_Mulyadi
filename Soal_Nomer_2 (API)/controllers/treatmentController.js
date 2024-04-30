const Treatment = require('../models/treatmentModel');

exports.createTreatment = async (req, res) => {
  try {
    const newTreatment = new Treatment(req.body);
    await newTreatment.save();
    res.status(201).json({ message: 'Catatan perawatan berhasil dibuat' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllTreatments = async (req, res) => {
  try {
    const treatments = await Treatment.find();
    res.status(200).json(treatments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTreatment = async (req, res) => {
  try {
    const updatedTreatment = await Treatment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTreatment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTreatment = async (req, res) => {
  try {
    await Treatment.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Catatan perawatan berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
