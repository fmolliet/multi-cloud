const mongoose = require('mongoose');

const TranscriptionsSchema = new mongoose.Schema({
    job_id: String,
    audio_id: String,
    startdate: String,
    //Adicionar mais dados
});

module.exports = mongoose.model('Transcription', TranscriptionsSchema);