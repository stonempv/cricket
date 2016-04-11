var React = require('react');
var PropTypes = React.PropTypes;

function getStyles(props){
  return {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '300px'
  }
}

function InputField(props){
  return (
    <input
      className="form-control"
      placeholder=""
      onChange={props.onUpdateScore}
      value={props.score}
      type="text" />
  )
}

function Button(props){
  return (
   <button
      className="btn btn-success"
      type="button"
      style={{margin:'10px'}}
      onClick={props.onSubmitScore}>
       Record Score
    </button>
  )
}

function Match(props){
  return (
    <div style={getStyles(props)}>
      <InputField
        onUpdateScore = {props.onUpdateScore}
        score = {props.score}
       />
      <Button 
        onSubmitScore = {props.onSubmitScore}
      />
    </div>
  )
}

Match.propTypes = {
  score: PropTypes.string.isRequired,
  onUpdateScore: PropTypes.func.isRequired,
  onSubmitScore: PropTypes.func.isRequired
}

module.exports = Match;