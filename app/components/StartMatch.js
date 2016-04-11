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
      placeholder="Match 1"
      onChange={props.onUpdateMatchName}
      value={props.matchName}
      type="text" />
  )
}

function Button(props){
  return (
   <button
      className="btn btn-success"
      type="button"
      style={{margin:'10px'}}
      onClick={props.onSubmitMatchName}>
       Start Match
    </button>
  )
}

function StartMatch(props){
  return (
    <div style={getStyles(props)}>
      <InputField
        onUpdateMatchName = {props.onUpdateMatchName}
        matchName = {props.matchName}
       />
      <Button 
        onSubmitMatchName = {props.onSubmitMatchName}
      />
    </div>
  )
}

StartMatch.propTypes = {
  matchName: PropTypes.string.isRequired,
  onUpdateMatchName: PropTypes.func.isRequired,
  onSubmitMatchName: PropTypes.func.isRequired
}

module.exports = StartMatch;