const mongoose = require('mongoose');

const treatmentSchema = new mongoose.Schema({
  nama_pasien: String,
  tanggal_pengobatan: Date,
  keluhan: [String],
  resep_obat: [String],
  biaya_pengobatan: Number,
  menggunakan_asuransi: { type: Boolean, default: false },
  nama_asuransi: { type: String, default: null },
  biaya_yang_dicover_asuransi: { type: Number, default: 0 },
});

const Treatment = mongoose.model('Treatment', treatmentSchema);

module.exports = Treatment;
