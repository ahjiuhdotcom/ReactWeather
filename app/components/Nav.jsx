var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();

    var location = this.refs.search.value;
    // encode the location so that it can be use in url e.g. hanlde ' ' in url to '%20'
    var encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.refs.search.value = '';
      // to add the 'encodedLocation' to location query string
      // then redirect to that url
      // this will not re-render the component if this happen at the same page
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  // 'activeClassName="active"': a class name 'active' that only appear
  // when the link is active
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="search" placeholder="Search weather by name" />
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
