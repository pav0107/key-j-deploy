const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.post('/', controllers.root);

router.post('/compare', controllers.compare);

router.post('/track_audio', controllers.trackAudio);

router.post('/songs_like_this', controllers.songsLikeThis);

router.post('/artist_top_tracks', controllers.artistTopTracks);

router.post('/get_album_tracks', controllers.albumTracks);

module.exports = router;
