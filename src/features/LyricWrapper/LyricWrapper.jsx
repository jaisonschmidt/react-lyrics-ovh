import React from "react";

import LyricLetter from "./LyricLetter/LyricLetter";
import LyricList from "./LyricList/LyricList";

import LyricsOvh from "lyricsovh-lib";

import "./LyricWrapper.scss";

class LyricWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songLetter: "",
      songList: [],
      lyricsapi: new LyricsOvh()
    };

    this.handleMusicSelect = this.handleMusicSelect.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchWorld !== prevProps.searchWorld) {
      this.setState({
        songLetter: ""
      });
      if (this.props.searchWorld !== "")
        this.state.lyricsapi.getSuggest(this.props.searchWorld).then(res => {
          console.log(res);
          this.setState({ songList: res.data });
        });
      else
        this.setState({
          songList: []
        });
    }
  }

  handleMusicSelect(music) {
    console.log(music);
    try {
      this.state.lyricsapi
        .getLyric(music.artist.name, music.title)
        .then(res => {
          this.setState({
            songLetter: res.error ? "Música não encontrada" : res.lyrics
          });
        });
    } catch (e) {
      console.log("eeeeeeeeeee");
    }
  }

  handleBackButton() {
    this.setState({
      songLetter: ""
    });
  }

  render() {
    return (
      <section className="songWrapper">
        {this.state.songLetter !== "" ? (
          <LyricLetter
            songLetter={this.state.songLetter}
            handleBackButton={this.handleBackButton}
          />
        ) : (
          <LyricList
            songList={this.state.songList}
            handleMusicSelect={this.handleMusicSelect}
          />
        )}
      </section>
    );
  }
}

export default LyricWrapper;
