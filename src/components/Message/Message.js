/**
 * Created by Max3014 on 4/20/2018.
 */

'use strict';

import React, {Fragment} from 'react';
import Breadcrumbs from '../general/presentational/Breadcrumbs';
import Contacts from './container/ContactsList';
import ChatBlock from './container/ChatBlock';


class Message extends React.Component {
	render() {
		return (
			<Fragment>
				<Breadcrumbs/>
				<Contacts/>
				<ChatBlock/>
			</Fragment>
		);
	}
}

export default Message;