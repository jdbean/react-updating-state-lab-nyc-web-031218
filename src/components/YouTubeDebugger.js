// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  };

  handleResolutionClick = () => {
    this.setState({
      settings: {
       ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p',
        },
      },
    });
  }

  handleBitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
  }

  render() {
    return (
      <div>
      <button className="resolution" onClick={this.handleResolutionClick}>Change Resolution</button>
      <button className="bitrate" onClick={this.handleBitrateClick}>Change Bitrate</button>
      </div>
    );
  }
}
