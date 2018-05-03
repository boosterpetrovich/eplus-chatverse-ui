/**
 * Created by Max3014 on 4/20/2018.
 */


'use strict';

import React from 'react';
import ItemPeople from '../presentational/ItemPeople';
import SearchInput from './SearchInput';


class Contacts extends React.Component {
	constructor() {
		super();
		this.state = {
			items: [],
			filteredItems: [],
			searchStr: ''
		}
	}

	searchHandle = (event) => {
		let searchStr = new RegExp(event.target.value.toLowerCase())
		this.setState({
			searchStr: event.target.value
		});
		console.log(this.state.items, searchStr);
		let searchItems = this.state.items.filter((item) => searchStr.test(item.name.toLowerCase()));
		this.setState({
			filteredItems: searchItems
		});
	};

	componentWillMount() {
		fetch('http://localhost:9001/getcontacts').then((data) => {
			return data.json();
		}).then((data) => {
			console.log(data);
			this.setState({
				items: data.list,
				filteredItems: data.list
			});
		});
	};

	render = () => {
		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="collapsable-panel-wrapper">
						<div className="pull-left maximize-btn mb-20" style={{display: 'none'}}>
							<button type="button" className="btn btn-flat no-padding btn-icon legitRipple">
								<i className="icon-arrow-right13"></i>
							</button>
						</div>
						<div className="collapsable-panel-left">
							<div className="panel panel-flat">
								<div className="panel-heading">

									<div className="row news-type">
										<div className="col-lg-4 col-md-4 col-xs-4 col-sm-4">
											<h6 className="panel-title">Message</h6>
										</div>
										<div className="col-lg-4 col-md-4 col-xs-4 col-sm-4">
											<div className="input-group-btn pr-10">
												<div className="btn-group">
													<button type="button"
																	className="bg-white btn btn-flat btn-minimal dropdown-toggle btn-xs legitRipple"
																	data-toggle="dropdown">Add New <span className="caret"></span></button>
													<ul className="dropdown-menu dropdown-menu-right">
														<li>
															<a href="#">Chat</a>
														</li>
														<li>
															<a href="#">Broadcast</a>
														</li>
														<li>
															<a href="#">Channel</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-lg-4 col-md-4 col-xs-4 col-sm-4 text-right">
											<ul className="icons-list">

												<li>
													<a href="#" className="minimize-btn rotate-180">
														<i className="icon-arrow-right13"></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>

								<div className="panel-body no-padding">

									<ul className="nav nav-lg nav-tabs tab-background nav-justified no-margin">
										<li className="active">
											<a href="#chat-history" className="text-size-small legitRipple" data-toggle="tab">
												Messages
											</a>
										</li>

										<li>
											<a href="#chat-contacts" className="text-size-small legitRipple" data-toggle="tab">
												Contacts
											</a>
										</li>
									</ul>

									<div className="tab-content background-content">
										<div className="tab-pane active pt-5 fade in sidebar-default" id="chat-history">
											<div className="sidebar-category prevent-default contact-type-container">
												<div className="category-title">
													<span>Message Type: <span className="selected-message-type">All</span> </span>
													<ul className="icons-list">
														<li>
															<a href="#" data-action="collapse"></a>
														</li>
													</ul>
												</div>

												<div className="category-content p-t-0 p-b-0" style={{display: 'none'}}>
													<form action="#">
														<div className="form-group">
															<div className="radio">
																<label>
																	<div className="choice"><span className="checked"><input type="radio"
																																													 name="message-type"
																																													 className="styled"
																																													 defaultChecked=""/></span>
																	</div>
																	All
																</label>
															</div>

															<div className="radio">
																<label>
																	<div className="choice"><span><input type="radio" name="message-type"
																																			 className="styled"/></span></div>
																	Chat
																</label>
															</div>

															<div className="radio">
																<label>
																	<div className="choice"><span><input type="radio" name="message-type"
																																			 className="styled"/></span></div>
																	Broadcast
																</label>
															</div>

															<div className="radio">
																<label>
																	<div className="choice"><span><input type="radio" name="message-type"
																																			 className="styled"/></span></div>
																	Channel
																</label>
															</div>
														</div>
													</form>
												</div>
											</div>
											<div className="sidebar-category prevent-default contact-type-container">
												<div className="category-title">
													<span>HISTORY: <span className="selected-history">All</span> </span>
													<ul className="icons-list">
														<li>
															<a href="#" data-action="collapse"></a>
														</li>
													</ul>
												</div>

												<div className="category-content p-t-0 p-b-0" style={{display: 'none'}}>
													<form action="#">
														<div className="form-group">
															<div className="radio">
																<label>
																	<div className="choice"><span className="checked"><input type="radio" name="history"
																																													 className="styled"
																																													 defaultChecked=""/></span>
																	</div>
																	All
																</label>
															</div>

															<div className="radio">
																<label>
																	<div className="choice"><span><input type="radio" name="history" className="styled"/></span>
																	</div>
																	Today
																</label>
															</div>

															<div className="radio">
																<label>
																	<div className="choice"><span><input type="radio" name="history" className="styled"/></span>
																	</div>
																	7 Days history
																</label>
															</div>
														</div>
													</form>
												</div>
											</div>

											<div className="row">
												<div className="col-xs-12">
													<div className="input-group search-group">
														<SearchInput value={this.state.searchStr} handler={this.searchHandle}/>
														<div className="input-group-btn pr-10">
															<div className="btn-group">
																<button type="button"
																				className="btn btn-flat btn-minimal dropdown-toggle btn-xs legitRipple"
																				data-toggle="dropdown">All <span className="caret"></span></button>
																<ul className="dropdown-menu dropdown-menu-right">
																	<li>
																		<a href="#">All</a>
																	</li>
																	<li>
																		<a href="#">Topics</a>
																	</li>
																	<li>
																		<a href="#">Messages</a>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="p-20 p-r-0 pt-10">
												<div className="row">
													<div className="col-xs-12">
														<ul className="media-list contact-list">
															{this.state.filteredItems.map((item, key) => {
																return (
																	<ItemPeople key={key}
																							avtr={item.avtr}
																							name={item.name}/>
																)
															})
															}
														</ul>
													</div>
												</div>
											</div>
										</div>

										<div className="tab-pane fade pt-5 sidebar-default" id="chat-contacts">

											<div className="sidebar-category prevent-default contact-type-container">
												<div className="category-title">
													<span>CONTACT TYPE: <span className="selected-contact-type">All Individuals</span> </span>
													<ul className="icons-list">
														<li>
															<a href="#" data-action="collapse"></a>
														</li>
													</ul>
												</div>

												<div className="category-content p-t-0 p-b-0" style={{display: 'none'}}>
													<form action="#">
														<div className="form-group">
															<div className="radio">
																<label>
																	<div className="choice" id="uniform-radio-individuals"><span className="e"><input
																		id="radio-individuals" type="radio" name="contact-type" className="styled"
																		defaultChecked=""/></span></div>
																	All Individuals
																</label>
															</div>

															<div className="radio">
																<label>
																	<div className="choice"><span><input type="radio" name="contact-type"
																																			 className="styled"/></span></div>
																	Recent
																</label>
															</div>

															<div className="radio">
																<label>
																	<div className="choice" id="uniform-radio-groups"><span><input id="radio-groups"
																																																 type="radio"
																																																 name="contact-type"
																																																 className="styled"/></span>
																	</div>
																	All Groups
																</label>
															</div>

															<div className="radio">
																<label>
																	<div className="choice"><span><input type="radio" name="contact-type"
																																			 className="styled"/></span></div>
																	Recent
																</label>
															</div>
														</div>
													</form>
												</div>
											</div>

											<div className="sidebar-category prevent-default entities-container">
												<div className="category-title">
													<span>ENTITIES: <span className="selected-entities">All</span></span>
													<ul className="icons-list">
														<li>
															<a href="#" data-action="collapse"></a>
														</li>
													</ul>
												</div>

												<div className="category-content p-t-0 p-b-0" style={{display: 'none'}}>
													<form action="#">
														<div className="form-group">
															<div className="checkbox">
																<label>
																	<div className="checker"><span className="checked"><input type="checkbox"
																																														className="styled"
																																														defaultChecked="checked"/></span>
																	</div>
																	Student
																</label>
															</div>

															<div className="checkbox">
																<label>
																	<div className="checker"><span className="checked"><input type="checkbox"
																																														className="styled"
																																														defaultChecked="checked"/></span>
																	</div>
																	Student Relation
																</label>
															</div>

															<div className="checkbox">
																<label>
																	<div className="checker"><span className="checked"><input type="checkbox"
																																														className="styled"
																																														defaultChecked="checked"/></span>
																	</div>
																	Staff
																</label>
															</div>

															<div className="checkbox">
																<label>
																	<div className="checker"><span className="checked"><input type="checkbox"
																																														className="styled"
																																														defaultChecked="checked"/></span>
																	</div>
																	Alumni
																</label>
															</div>

															<div className="checkbox">
																<label>
																	<div className="checker"><span className="checked"><input type="checkbox"
																																														className="styled"
																																														defaultChecked="checked"/></span>
																	</div>
																	Applicant
																</label>
															</div>
															<hr className="seperator"/>
															<div className="checkbox">
																<label>
																	<div className="checker"><span className="checked"><input type="checkbox"
																																														className="styled"
																																														defaultChecked="checked"/></span>
																	</div>
																	Library Borrowers
																</label>
															</div>
															<div className="checkbox">
																<label>
																	<div className="checker"><span className="checked"><input type="checkbox"
																																														className="styled"
																																														defaultChecked="checked"/></span>
																	</div>
																	External Company Staff
																</label>
															</div>
															<div className="checkbox">
																<label>
																	<div className="checker"><span className="checked"><input type="checkbox"
																																														className="styled"
																																														defaultChecked="checked"/></span>
																	</div>
																	External Student
																</label>
															</div>
															<div className="checkbox">
																<label>
																	<div className="checker"><span className="checked"><input type="checkbox"
																																														className="styled"
																																														defaultChecked="checked"/></span>
																	</div>
																	General
																</label>
															</div>
														</div>
													</form>
												</div>
											</div>
											<div className="row">
												<div className="col-xs-12">
													<div className="form-group search-group">
														<input type="search" className="form-control pl-20 pr-20" placeholder="Search..."/>
													</div>
												</div>
											</div>
											<div className="p-20 p-r-0 p-t-0">
												<div className="row">
													<div className="col-xs-12">
														<ul className="media-list contact-list individuals">
															<li className="media">
																<div className="strike">
																	<span>Individuals (92)</span>
																</div>
																<div className="media-left">
																	<a href="#">
																		<img data-toggle="popover" data-user-info-show="true"
																				 src="../../assets/images/staff3.jpg" className="img-circle img-xs" alt=""
																				 data-original-title="" title=""/>
																		<span title="Offline" className="badge status-icon no-padding  media-badge">
																				<i className="icon-circle text-grey"></i>
																			</span>
																	</a>
																</div>
																<div className="media-body single-line">
																	<a href="#" className="contact">
																		Isak Temes
																	</a>
																</div>
															</li>
															<li className="media">
																<div className="media-left">
																	<a href="#">
																		<img data-toggle="popover" data-user-info-show="true"
																				 src="../../assets/images/avatar2.jpg" className="img-circle img-xs" alt=""
																				 data-original-title="" title=""/>
																		<span title="Online" className="badge status-icon no-padding media-badge">
																				<i className="icon-circle2 text-success-400"></i>
																			</span>
																	</a>
																</div>
																<div className="media-body single-line">
																	<a href="#" className="contact">
																		Vittorio Cosgrove
																	</a>
																</div>
															</li>
															<li className="media">
																<div className="media-left">
																	<a href="#">
																		<img data-toggle="popover" data-user-info-show="true"
																				 src="../../assets/images/staff1.jpg" className="img-circle img-xs" alt=""
																				 data-original-title="" title=""/>
																		<span title="Offline" className="badge status-icon no-padding media-badge">
																				<i className="icon-circle text-grey"></i>
																			</span>
																	</a>
																</div>
																<div className="media-body single-line">
																	<a href="#" className="contact">
																		Jeremy Victorino
																	</a>
																</div>
															</li>
															<li className="media">
																<div className="media-left">
																	<a href="#">
																		<img data-toggle="popover" data-user-info-show="true"
																				 src="../../assets/images/staff4.jpg" className="img-circle img-xs" alt=""
																				 data-original-title="" title=""/>
																		<span title="Online" className="badge status-icon no-padding  media-badge">
																				<i className="icon-circle2 text-success-400"></i>
																			</span>
																	</a>
																</div>
																<div className="media-body single-line">
																	<a href="#" className="contact">
																		Beatrix Diaz
																	</a>
																</div>
															</li>
															<li className="media">
																<div className="media-left">
																	<a href="#">
																		<img data-toggle="popover" data-user-info-show="true"
																				 src="../../assets/images/staff2.jpg" className="img-circle img-xs" alt=""
																				 data-original-title="" title=""/>
																		<span title="Online" className="badge status-icon no-padding  media-badge">
																				<i className="icon-circle2 text-success-400"></i>
																			</span>
																	</a>
																</div>
																<div className="media-body single-line">
																	<a href="#" className="contact">
																		Richard Vango
																	</a>
																</div>
															</li>
															<li className="media">
																<div className="media-left">
																	<a href="#">
																		<img data-toggle="popover" data-user-info-show="true"
																				 src="../../assets/images/staff5.jpg" className="img-circle img-xs" alt=""
																				 data-original-title="" title=""/>
																		<span title="Offline" className="badge status-icon no-padding  media-badge">
																				<i className="icon-circle text-grey"></i>
																			</span>
																	</a>
																</div>
																<div className="media-body single-line">
																	<a href="#" className="contact">
																		James Green
																	</a>
																</div>
															</li>
															<li className="media">
																<div className="media-left">
																	<a href="#">
																		<img data-toggle="popover" data-user-info-show="true"
																				 src="../../assets/images/avatar15-big.jpg" className="img-circle img-xs" alt=""
																				 data-original-title="" title=""/>
																		<span title="Offline" className="badge status-icon no-padding  media-badge">
																				<i className="icon-circle text-grey"></i>
																			</span>
																	</a>
																</div>
																<div className="media-body single-line">
																	<a href="#" className="contact">
																		Julia Hazard
																	</a>
																</div>
															</li>
														</ul>
														<ul className="media-list person-list mt-10">
															<li className="media">
																<div className="strike">
																	<span>Groups (2)</span>
																</div>
																<div className="media-left">
																	<a href="#">
																		<img src="../../assets/images/placeholder.jpg" className="img-circle img-xs"
																				 alt=""/>
																	</a>
																</div>
																<div className="media-body single-line">
																	<a href="#" className="groups">
																		My Mutual Friends
																	</a>
																</div>
															</li>
															<li className="media">
																<div className="media-left">
																	<a href="#">
																		<img src="../../assets/images/placeholder.jpg" className="img-circle img-xs"
																				 alt=""/>
																	</a>
																</div>
																<div className="media-body single-line">
																	<a href="#" className="groups">
																		Grade 10 Students
																	</a>
																</div>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};
}

export default Contacts;
