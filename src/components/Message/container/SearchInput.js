/**
 * Created by Max3014 on 4/24/2018.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

class SearchInput extends React.Component {
	constructor() {
		super();
	}

	static propTypes = {
		handler: PropTypes.func.isRequired,
		value: PropTypes.string.isRequired
	};

	render = () => {
		return (
			<input type="search" value={this.props.value} onChange={this.props.handler} className="form-control pl-20"
						 placeholder="Search..."/>
		);
	};
}

export default SearchInput ;