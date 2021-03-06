import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export const AlbumTracks = () => {
  const [state, setState] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch('/api/get_album_tracks', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        albumId: params.albumId,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log(res);
        }
      })
      .then((response) => setState(response.album_tracks));
  }, []);

  return (
    <div>
      <div className="breaker"></div>
      <h2>
        <img
          src={'https://i.scdn.co/image/' + params.albumUrl}
          style={{ height: 200 }}
        />
        {params.albumName}
      </h2>
      {state.length > 0 &&
        state.map((e) => (
          <div className="song-container song-album-container" key={uuidv4()}>
            <div className="song-section">
              <a
                href={'/track/' + e.id + '/' + params.albumUrl + '/' + e.name}
                key={uuidv4()}
              >
                <div className="song-div">
                  <h2>
                    {e.track_number}. {e.name}
                  </h2>
                </div>
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AlbumTracks;
