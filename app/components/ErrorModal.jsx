// Long story short
// Foundation is messing around with ReactDOM in maintaining the component
// After app is putting the element in the DOM, Foundation is removing them
// This doesnt play well with React as React need to be able maintain application state
// Solution: move the element outside of the render method and move it to componentDidMount()
// With this, stability of ReactDOM in rendering the DOM was not interrupted by Foundation

var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({

  getDefaultProps: function() {
    return {
      title: 'Error'
    };
  },
  // Helpfull for developer
  // as we can see the error message in developer console
  // if incorrect propTypes was passed down
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function() {

    var {title, message} = this.props;

    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
    debugger;
    // jquery selector: create the element and render it to the screen
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    // Add it to the DOM
    $(ReactDOM.findDOMNode(this)).html($modal);
    debugger;
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function() {

    // empty 'div' is minimum set of jsx required for component to render properly
    // Since foundation going to manipulate the DOM,
    // we start with no DOM at all
    return (
      <div>
      </div>
    );
  }
});

module.exports = ErrorModal;
