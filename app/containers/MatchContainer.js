var React = require('react');
var Match = require('../components/Match');
var addScore = require('../utils/cricket').addScore

var MatchContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return ({
      score: ''
    })
  },
  handleUpdateScore: function(e){
    this.setState({
      score: e.target.value
    })
  },
  handleSubmitScore: function(e){
    e.preventDefault();
    var score = this.state.score;
    this.setState({
      score: ''
    });
    addScore(score);
  },
  render: function(){
    return (
      <Match 
        onSubmitScore={this.handleSubmitScore}
        onUpdateScore={this.handleUpdateScore}
        score={this.state.score}
      />
    )
  }
})

module.exports = MatchContainer;