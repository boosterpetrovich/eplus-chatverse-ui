import React, {Fragment} from 'react';
import {Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Message from '../../components/Message/Message';
import Conversation from '../../components/Conversation/Conversation';
import LeftNav from '../../components/general/presentational/LeftNav';
import EmailGeneral from '../../components/Email/General/EmailGeneral';
import EmailProgramReports from '../../components/Email/ProgramReports/EmailProgramReports';
import EmailAccounts from '../../components/Email/Accounts/EmailAccounts';
import Sms from '../../components/Sms/Sms';
import News from '../../components/News/News';
import Announcement from '../../components/Announcement/Announcement.js';
import Newsletter from '../../components/Newsletter/Newsletter';
import ContactsGroups from '../../components/Contacts/Groups/ContactsGroups.js';
import ContactsIndividuals from '../../components/Contacts/Individuals/ContactsIndividuals.js';

const history = createBrowserHistory();

export default class EdComPage extends React.Component {
	render() {
		return (
			<Router history={history}>
				<Fragment>
					<div className="page-container">
						<div className="page-content">
							<LeftNav/>
							<Route exact path="/" component={Message}/>
							<Route path="/conversation" component={Conversation}/>
							<Route path="/message" component={Message}/>
							<Route path="/email_general" component={EmailGeneral}/>
							<Route path="/email_program-reports" component={EmailProgramReports}/>
							<Route path="/email_accounts" component={EmailAccounts}/>
							<Route path="/sms" component={Sms}/>
							<Route path="/news" component={News}/>
							<Route path="/announcement" component={Announcement}/>
							<Route path="/newsletter" component={Newsletter}/>
							<Route path="/contacts_groups" component={ContactsGroups}/>
							<Route path="/contacts_individuals" component={ContactsIndividuals}/>
						</div>
					</div>
				</Fragment>
			</Router>
		);
	}
}
