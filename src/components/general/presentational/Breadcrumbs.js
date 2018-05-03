/**
 * Created by Max3014 on 4/21/2018.
 */

'use strict';

import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

class Breadcrumbs extends React.Component {
	render() {
		return (
			<Fragment>
				<div className="row">
					<div className="col-xs-12">
						<div className="line-wrapper">
							<ul className="breadcrumb breadcrumb-caret pull-left">
								<li>
									<a href="#"><i className="icon-home2 position-left"></i></a>
								</li>
								<li>
									<Link to="./">Ed-com</Link>
								</li>
								<li className="active">Message</li>
							</ul>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Breadcrumbs;