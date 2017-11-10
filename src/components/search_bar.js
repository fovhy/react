import React, {Component} from 'react';
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }
    render() {
        return (
            <form className="search-bar">
                <input
                    placeholder="mens not hot..."
                    value={this.state.term}
                    onChange=
                    { event => this.onInputChange(event.target.value)} />
            </form>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
};

export default SearchBar;