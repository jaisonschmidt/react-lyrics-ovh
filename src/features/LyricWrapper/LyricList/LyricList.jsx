import React from "react";

import "./LyricList.scss";

class LyricList extends React.Component {
  render() {
    return (
      <div className="lyricList">
        {this.props.songList.map((song, key) => {
          return (
            <button
              className="-songname"
              key={key}
              onClick={() => this.props.handleMusicSelect(song)}
            >
              {song.title}
            </button>
          );
        })}
        {this.props.songList.length === 0 && "Procure uma musica"}
      </div>
    );
  }
}

export default LyricList;
