import React, { Component } from 'react';
import { createPlayer, updatePlayer } from '../../helpers/data/playerData';

export default class PlayerForm extends Component {
  state = {
    firebaseKey: this.props.player?.firebaseKey || '',
    name: this.props.player?.name || '',
    imageUrl: this.props.player?.imageUrl || '',
    position: this.props.player?.position || '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.btn.setAttribute('disabled', 'disabled');
    if (this.state.firebaseKey === '') {
      createPlayer(this.state).then(() => {
        this.props.onUpdate?.();
        this.setState({ success: true });
      });
    } else {
      updatePlayer(this.state).then(() => {
        this.props.onUpdate?.(this.props.player.firebaseKey);
        this.setState({ success: true });
      });
    }
  };

  render() {
    const { success } = this.state;
    return (
      <>
        {success && (
          <div className='alert alert-success' role='alert'>
            Your player was Updated/Created
          </div>
        )}
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
              placeholder='Player Name'
              className='form-control form-control-lg m-1'
              required
            />
          </div>
          <div>
            <input
              type='text'
              name='position'
              value={this.state.position}
              onChange={this.handleChange}
              placeholder='Player position'
              className='form-control form-control-lg m-1'
              required
            />
          </div>
          <div>
            <input
              type='url'
              name='imageUrl'
              value={this.state.imageUrl}
              onChange={this.handleChange}
              placeholder='Enter an Image URL'
              className='form-control form-control-lg m-1'
              required
            />
          </div>
          <button
            ref={(btn) => {
              this.btn = btn;
            }}
            className='btn btn-primary m-2'
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}
