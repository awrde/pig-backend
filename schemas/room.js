const mongoose = require('mongoose')
const Timeline = require('./timeline')
const Worksheet = require('./worksheet')
const { Schema } = mongoose;

const roomSchema = new mongoose.Schema({
  roomName: String,
  roomImage: String,
  master: { type: Schema.Types.ObjectId, ref: 'User' },
  inviteCode: String,
  subtitle: String,
  tag: [String],
  members: [{
    type: Schema.ObjectId,
    ref: 'User'
  }],
  timeline: [Timeline.schema],
  worksheet: [Worksheet.schema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
})
module.exports = mongoose.model('Room', roomSchema);
