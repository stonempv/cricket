var React = require('react');
var StartMatch = require('../components/StartMatch');
var newMatch = require('../utils/cricket').newMatch

var StartMatchContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return ({
      matchName: ''
    })
  },
  handleUpdateMatchName: function(e){
    this.setState({
      matchName: e.target.value
    })
  },
  handleSubmitMatchName: function(e){
    e.preventDefault();
    var matchName = this.state.matchName;
    this.setState({
      matchName: ''
    });
    newMatch(matchName);
    this.context.router.push({
      pathname: 'match/'+matchName
    })
  },
  render: function(){
    return (
      <StartMatch 
        onSubmitMatchName={this.handleSubmitMatchName}
        onUpdateMatchName={this.handleUpdateMatchName}
        matchName={this.state.matchName}
      />
    )
  }
})

module.exports = StartMatchContainer;