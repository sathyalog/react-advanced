var React = require('react');
var ReactDOM = require('react-dom');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var WithLink = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    return {message: 'Hello!'};
  },
  render: function() {
  	
    return (<div>
         <b className="red"> Working with two-way binding helpers with LinkedStateMixin </b><br/>
    		<input type="text" valueLink={this.linkState('message')} />
    		{this.linkState('message').value}
        <input type="checkbox" checkedLink={this.linkState('booleanValue')} />
        {(this.linkState('booleanValue').value==false)?"Unchecked":"checked"}
    		</div>);
  }
});

var WithoutMixin = React.createClass({
  getInitialState: function() {
    
    return {message: 'Hello!'};
  },
  handleChange: function(newValue) {
    this.setState({message: newValue});
  },
  
  render: function() {
    var valueLink = {
      value: this.state.message,
      requestChange: this.handleChange
    };
    return <div>
          <b className="red"> Working with two-way binding helpers without using Mixins </b><br/>
          <input type="text" valueLink={valueLink} />
          {this.state.message}<br/>
          
        </div>
  }
});


var WithoutLink = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    return {message: 'Hello!'};
  },
  render: function() {
    var valueLink = this.linkState('message');
    var handleChange = function(e) {
      valueLink.requestChange(e.target.value);
    };
    return (<div>
        <b className="red"> Working with two-way binding helpers without Link </b><br/>
        <input type="text" value={valueLink.value} onChange={handleChange} />
        {this.state.message}
      </div>); 
  }
});

ReactDOM.render(<div>
  <WithLink /> 
  <WithoutMixin/>
  <WithoutLink/>
  </div>, document.getElementById('app'));