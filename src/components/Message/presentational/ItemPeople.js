/**
 * Created by Max3014 on 4/21/2018.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

class ItemPeople extends React.Component {
	render() {
		return (
			<li className="media">
				<div className="media-left">
					<a href="#">
						<img data-toggle="popover" data-user-info-show="true" src={this.props.avtr}
								 className="img-circle img-xs no-action" alt="" data-original-title="" title=""/>
					</a>
				</div>
				<div className="media-body">
					<a href="#" className="contact">
						{this.props.name}
						<span className="badge bg-orange-400 unread-msg">2</span>
					</a>
					<span className="display-block text-size-mini text-muted" title="Today
Sun 11 Jul 2018, 8:32am">Just now</span>
				</div>
			</li>
		);
	}
}

ItemPeople.propTypes = {
	avtr: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};

export default ItemPeople;