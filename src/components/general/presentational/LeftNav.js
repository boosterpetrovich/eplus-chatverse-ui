/**
 * Created by Max3014 on 4/20/2018.
 */


'use strict';

import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

class LeftNav extends React.Component {
	render() {
		return (
			<Fragment>
				<div className="sidebar sidebar-main sidebar-default">
					<div className="components-left-navigation">
						<div className="sidebar-content">
							<div className="sidebar-category sidebar-category-visible">
								<div className="category-title h6 bg-cyan-a100">
									<span>Ed-com</span>
									<a className="leftnav-collapse-btn hidden-xs"
										 href="https://design.eplus.ed-space.net/admin/ed-com/message.html#">
										<i className="icon-arrow-left22"></i></a>
									<ul className="icons-list">
										<li>
											<a href="https://design.eplus.ed-space.net/admin/ed-com/message.html#"
												 data-action="collapse" className="hidden visible-xs rotate-180"></a>
										</li>
									</ul>
								</div>
								<div className="category-content no-padding">
									<ul className="navigation navigation-main navigation-accordion">
										<li data-left-nav="message" className="active">
											<Link to="./message"
												 className="legitRipple"><i className="icon-stack"></i><span>Message</span></Link>
										</li>
										<li data-left-nav="conversation">
											<Link to="./conversation"
												 className="legitRipple"><i className="icon-stack"></i> <span>Conversation</span></Link>
										</li>
										<li>
											<a href="http://localhost:8080/#"
												 className="has-ul legitRipple"><i className="icon-stack"></i> <span>Email</span></a>
											<ul className="hidden-ul">
												<li data-left-nav="general">
													<Link to="./email_general"
														 className="legitRipple">General
													</Link>
												</li>
												<li data-left-nav="program-reports">
													<Link to="./email_program-reports"
														 className="legitRipple">Program Reports
													</Link>
												</li>
												<li data-left-nav="accounts">
													<Link to="./email_accounts"
														 className="legitRipple">Accounts
													</Link>
												</li>
											</ul>
										</li>
										<li data-left-nav="sms">
											<Link to="./sms"
												 className="legitRipple"><i className="icon-stack"></i> <span>SMS</span></Link>
										</li>
										<li data-left-nav="news">
											<Link to="./news"
												 className="legitRipple"><i className="icon-stack"></i> <span>News</span></Link>
										</li>
										<li data-left-nav="announcement">
											<Link to="./announcement"
												 className="legitRipple"><i className="icon-stack"></i> <span>Announcement</span></Link>
										</li>
										<li data-left-nav="newsletter">
											<Link to="./newsletter"
												 className="legitRipple"><i className="icon-stack"></i> <span>Newsletter</span></Link>
										</li>
										<li className="navigation-divider"></li>
										<li>
											<a href="https://design.eplus.ed-space.net/admin/ed-com/message.html#"
												 className="has-ul legitRipple"><i className="icon-stack"></i> <span>Contacts</span></a>
											<ul className="hidden-ul">
												<li data-left-nav="individuals">
													<Link to="./contacts_individuals"
														 className="legitRipple">Individuals
													</Link>
												</li>
												<li data-left-nav="groups">
													<Link to="./contacts_groups"
														 className="legitRipple">Groups
													</Link>
												</li>
											</ul>
										</li>

									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default LeftNav;