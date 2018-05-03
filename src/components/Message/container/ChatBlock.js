/**
 * Created by Max3014 on 4/20/2018.
 */

'use strict';

import React from 'react';

class ChatBlock extends React.Component {
	render() {
		return (
			<div className="collapsable-panel-right">
				<div id="chats-tab">

					<div className="history-emtpy-message nothing-selected-box text-center" style={{display: 'none'}}>
						Select a chat history to view...
					</div>

					<div className="contacts-emtpy-message nothing-selected-box text-center" style={{display: 'none'}}>
						Click on a contact to start a new chat...
					</div>


					<div className="tabbable tab-content-bordered content-group-lg right-panel responsive-tab">
						<ul className="nav nav-tabs nav-lg nav-tabs-highlight">
							<li className="active" id="">
								<a href="#dwain" data-toggle="tab" className="legitRipple">
									<img src="../../assets/images/sponsor2.jpg" alt="" className="img-circle tab-img position-left"/>Dwain
										<span title="Online" className="badge status-icon no-padding media-badge">
		                                                <i className="icon-circle2 text-success-400"></i>
		                                            </span>
										<button type="button" className="close ml-10 text-size-xxlarge pull-right" onClick={closeChat(this)}>×</button>
										<span className="badge pull-right bg-orange ml-5 unread-msg">2</span>
								</a>
							</li>

							<li id="">
								<a href="#margo" data-toggle="tab" className="legitRipple">
									<img src="../../assets/images/avatar2.jpg" alt="" className="img-circle tab-img position-left"/>Margo
										<span title="Online" className="badge status-icon no-padding media-badge">
		                                                <i className="icon-circle2 text-success-400"></i>
		                                            </span>
										<button type="button" className="close ml-10 text-size-xxlarge pull-right" onClick="closeChat(this);">×</button>
								</a>
							</li>

							<li id="">
								<a href="#jeremy" data-toggle="tab" className="legitRipple">
									<img src="../../assets/images/staff1.jpg" alt="" className="img-circle tab-img position-left"/>Jeremy
										<span title="Offline" className="badge status-icon no-padding media-badge">
		                                                <i className="icon-circle text-grey"></i>
		                                            </span>
										<button type="button" className="close ml-10 text-size-xxlarge pull-right" onClick="closeChat(this);">×</button>
								</a>
							</li>

							<li id="">
								<a href="#beatrix" data-toggle="tab" className="legitRipple">
									<img src="../../assets/images/staff4.jpg" alt="" className="img-circle tab-img position-left"/>Beatrix
										<span title="Offline" className="badge status-icon no-padding  media-badge">
		                                                <i className="icon-circle text-grey"></i>
		                                            </span>
										<button type="button" className="close ml-10 text-size-xxlarge pull-right" onClick="closeChat(this);">×</button>
										<span className="badge pull-right bg-orange ml-5 unread-msg">5</span>
								</a>
							</li>

							<li className="dropdown" id=""  style={{display: 'none'}}>
								<a href="#" className="dropdown-toggle legitRipple" data-toggle="dropdown"><span className="caret"/></a>
								<ul className="dropdown-menu dropdown-menu-right collapsed-menu">
								</ul>
							</li>

						</ul>


						<div className="tab-content">
							<div className="tab-pane fade in active has-padding" id="dwain">
								<div className="row mb-20 text-right">
									<div className="col-xs-12">


										<a href="#" className="dropdown-toggle action-link" data-toggle="dropdown"><i
											className="icon-transmission"></i>
											<span className="visible-xs-inline-block position-right">Dropdown</span>
											<span className="caret"></span>
										</a>
										<ul className="dropdown-menu dropdown-menu-right chat-dropdown active">
											<li><input type="text" className="p-5 bss-input input-xs form-control start_chat"
																 onKeyDown="event.stopPropagation()" onClick="event.stopPropagation()"
																 placeholder="Start new chat..."/></li>
											<li className="active">
												<a href="#">Assignment 1</a>
											</li>
											<li>
												<a href="#">Assignment 2</a>
											</li>
											<li>
												<a href="#">Assignment 3</a>
											</li>
										</ul>

										<a href="#" className="action-link" data-toggle="modal"
											 data-target="#modal-invite-participant" title="Message Settings"><i
											className="icon-cog3"></i></a>
									</div>

								</div>

								<ul className="media-list chat-list content-group">
									<li className="media date-step content-divider message-date">
										<span>28 Jun</span>
									</li>
									<li className="media my-message">
										<div className="media-left">
											<a href="#">
												<img src="../../assets/images/staff2.jpg" className="img-circle" alt="Richard Vango"
														 data-toggle="popover" data-user-info-show="true" data-original-title="" title=""/>
											</a>
										</div>

										<div className="media-body">
											<div className="media-content">CrudSS reran and while much withdrew ardent much crab hugely
												met dizzily that more jeez gent equivalent unsafely far one hesitant so therefore.
											</div>
										</div>

										<div className="media-extra">
															<span className="text-muted text-size-mini" title="3 weeks agoWed 28 Jun 2018, 8:01am">
																	8:01am
																</span>

										</div>
									</li>

									<li className="media">
										<div className="media-left">
											<a href="#">
												<img src="../../assets/images/sponsor2.jpg" className="img-circle" alt="Dwain Smith"
														 title="" data-toggle="popover" data-user-info-show="true"
														 data-original-title="Dwain Smith"/>
											</a>
										</div>

										<div className="media-body">
											<div className="media-content">
												<a href="../../assets/images/gallery_image_4.png" target="_blank"><img
													src="../../assets/images/message-image-1.jpg" alt="ec1-class-1.jpg"
													title="ec1-class-1.jpg" className="inline-image"/></a>
												<a href="../../assets/images/gallery_image_3.png" target="_blank"><img
													src="../../assets/images/message-image-2.jpg" alt="ec1-class-2.jpg"
													title="ec1-class-2.jpg" className="inline-image"/></a>
												<br/>

												Far squid and that hello fidgeted and when. As this oh darn but slapped casually husky
												sheared that cardinal hugely one and some unnecessary factiously hedgehog a feeling one
												rudely much
											</div>
										</div>

										<div className="media-extra">
															<span className="text-muted text-size-mini"
																		title="3 weeks ago Wed 28 Jun 2018, 8:21pm">
																8:21pm
															</span>
										</div>
									</li>

									<li className="media my-message">
										<div className="media-left">
											<a href="#">
												<img src="../../assets/images/staff2.jpg" className="img-circle" alt="Richard Vango"
														 title="" data-toggle="popover" data-user-info-show="true"
														 data-original-title="Richard Vango"/>
											</a>
										</div>

										<div className="media-body">
											<div className="media-content">
												<a href="#" title="Play"><img src="../../assets/images/icon-play.png"/> Voice Message</a>
											</div>
										</div>

										<div className="media-extra">
															<span className="text-muted text-size-mini" title="3 weeks ago Wed 28 Jun 2018, 8:21pm">
																8:21pm
															</span>
										</div>
									</li>

									<li className="media date-step content-divider message-date">
										<span>5 Jul</span>
									</li>
									<li className="media my-message">
										<div className="media-left">
											<a href="#">
												<img src="../../assets/images/staff2.jpg" className="img-circle" alt="Richard Vango"
														 title="" data-toggle="popover" data-user-info-show="true"
														 data-original-title="Richard Vango"/>
											</a>
										</div>

										<div className="media-body">
											<div className="media-content">CrudSS reran and while much withdrew ardent much crab hugely
												met dizzily that more jeez gent equivalent unsafely far one hesitant so therefore.
											</div>
										</div>

										<div className="media-extra">
															<span className="text-muted text-size-mini" title="2 weeks ago
Wed 5 Jul 2018, 8:01am">
																	8:01am
																</span>

										</div>
									</li>

									<li className="media">
										<div className="media-left">
											<a href="#">
												<img src="../../assets/images/sponsor2.jpg" className="img-circle" alt="Dwain Smith"
														 title="" data-toggle="popover" data-user-info-show="true"
														 data-original-title="Dwain Smith"/>
											</a>
										</div>

										<div className="media-body">
											<div className="media-content">Far squid and that hello fidgeted and when. As this oh darn
												but slapped casually husky sheared that cardinal hugely one and some unnecessary
												factiously hedgehog a feeling one rudely much
											</div>
										</div>

										<div className="media-extra">
															<span className="text-muted text-size-mini" title="2 weeks ago
Wed 5 Jul 2018, 8:21pm">
																8:21pm
															</span>
										</div>
									</li>

									<li className="media my-message">
										<div className="media-left">
											<a href="#">
												<img src="../../assets/images/staff2.jpg" className="img-circle" alt="Richard Vango"
														 title="" data-toggle="popover" data-user-info-show="true"
														 data-original-title="Richard Vango"/>
											</a>
										</div>

										<div className="media-body">
											<div className="media-content">Tolerantly some understood this stubbornly after snarlingly
												frog far added insect into snorted more auspiciously heedless drunkenly jeez foolhardy oh.
											</div>
										</div>

										<div className="media-extra">
															<span className="text-muted text-size-mini" title="2 weeks ago
Wed 5 Jul 2018, 8:21pm">
																8:21pm
															</span>
										</div>
									</li>

									<li className="media date-step content-divider">
										<span>Today</span>
									</li>

									<li className="media">

										<div className="media-left">
											<a href="#">
												<img src="../../assets/images/sponsor2.jpg" className="img-circle" alt="Dwain Smith"
														 title="" data-toggle="popover" data-user-info-show="true"
														 data-original-title="Dwain Smith"/>
											</a>
										</div>

										<div className="media-body">
											<div className="media-content">Satisfactorily strenuously while sleazily dear frustratingly
												insect menially some shook far sardonic badger telepathic much jeepers immature much hey.
											</div>
										</div>

										<div className="media-extra">
															<span className="text-muted text-size-mini" title="Today
Tue 19 Jul 2018, 9:11am">
																9:11am
															</span>
										</div>
									</li>
									<li className="media">

										<div className="media-left">
											<a href="#">
												<img src="../../assets/images/sponsor2.jpg" className="img-circle" alt="Dwain Smith"
														 title="" data-toggle="popover" data-user-info-show="true"
														 data-original-title="Dwain Smith"/>
											</a>
										</div>

										<div className="media-body">
											<div className="media-content">
												<a href="#" title="Play"><img src="../../assets/images/icon-play.png"/> Voice Message</a>
											</div>
										</div>

										<div className="media-extra">
															<span className="text-muted text-size-mini" title="Today
Tue 19 Jul 2018, 9:11am">
																9:11am
															</span>
										</div>
									</li>

									<li className="media my-message">
										<div className="media-left">
											<a href="#">
												<img src="../../assets/images/staff2.jpg" className="img-circle" alt="Richard Vango"
														 title="" data-toggle="popover" data-user-info-show="true"
														 data-original-title="Richard Vango"/>
											</a>
										</div>

										<div className="media-body">
											<div className="media-content">Grunted smirked and grew less but rewound much despite and
												impressive via alongside out and gosh easy manatee dear ineffective yikes.


												<div className="attachments-container">
													<ul className="attached-area">
														<li>
																			<span className="attached-preview">
																				<i className="icon-file-picture"></i>
																			</span>
															<div className="attached-content">
																<a title="image_053.png
Uploaded on 13 July 2017 13:30
By: John Smith
Size: 128 K" className="file-name" href="#">image_053.png
																</a>
															</div>
														</li>
														<li>
																			<span className="attached-preview">
																				<i className="icon-file-pdf"></i>
																			</span>
															<div className="attached-content">
																<a title="subject_letter.pdf
Uploaded on 10 July 2017 10:20
By: John Smith
Size: 20 K" className="file-name" href="#">subject_letter.pdf
																</a>
															</div>
														</li>
													</ul>
												</div>


											</div>
										</div>

										<div className="media-extra">
															<span className="text-muted text-size-mini" title="Today
Tue 19 Jul 2018, 1:18pm">
																3 hrs ago
															</span>
										</div>
									</li>

									<li className="media">
										<div className="media-left">
											<a href="#">
												<img src="../../assets/images/sponsor2.jpg" className="img-circle" alt="Dwain Smith"
														 title="" data-toggle="popover" data-user-info-show="true"
														 data-original-title="Dwain Smith"/>
											</a>
										</div>

										<div className="media-body">
											<div className="media-content"><i className="icon-menu display-block"></i></div>
										</div>
									</li>
								</ul>

								<div className="type-area">
									<div className="add-comment">
										<div className="form-group form-group-material">

											<input type="text" className="form-control" placeholder="Type here..." value=""/>
										</div>
										<div className="row">
											<div className="col-xs-6">
												<ul className="icons-list icons-list-extended">
													<li>
														<div className="component-attachment-button-w-eddrive">
															<ul className="attachment-button icons-list mr-10">
																<li className="attach">
																	<a href="#"><span className="action-link" data-toggle="modal"
																										data-target="#modal-attachment-1"><i
																		className="icon-attachment"></i></span></a>
																</li>
															</ul>
														</div>
													</li>
												</ul>
											</div>

											<div className="col-xs-6 text-right">
												<button type="button"
																className="btn bg-teal-400 btn-labeled btn-labeled-right legitRipple"><b><i
													className="icon-circle-right2"></i></b> Send
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="tab-pane fade has-padding" id="margo">
								<div className="row mb-20 text-right">
									<div className="col-xs-12">
										<a href="#" className="action-link" data-toggle="modal"
											 data-target="#modal-invite-participant" title="Message Settings"><i
											className="icon-cog3"></i></a>
									</div>
								</div>

								<ul className="media-list chat-list content-group">
									<li className="media my-message">
										<div className="media-left">
											<a href="#">
												<img src="../../assets/images/staff2.jpg" className="img-circle" alt=""/>
											</a>
										</div>

										<div className="media-body">
											<div className="media-content">Crud reran and while much withdrew ardent much crab hugely
												met dizzily that more jeez gent equivalent unsafely far one hesitant so therefore.
											</div>
										</div>
										<div className="media-extra">
															<span className="text-muted text-size-mini" title="2 weeks ago
Wed 24 Jun 2018, 8:01am">
																Jun 24, 8:01am
															</span>
										</div>
									</li>

									<li className="media">

										<div className="media-left">
											<a href="#">
												<img src="../../assets/images/avatar2.jpg" className="img-circle" alt=""/>
											</a>
										</div>

										<div className="media-body">
											<div className="media-content">Far squid and that hello fidgeted and when. As this oh darn
												but slapped casually husky sheared that cardinal hugely one and some unnecessary
												factiously hedgehog a feeling one rudely much
											</div>
										</div>

										<div className="media-extra">
															<span className="text-muted text-size-mini" title="1 week ago
Mon 6 Jul 2018, 8:21pm">
																Jul 6, 8:21pm
															</span>
										</div>
									</li>

									<li className="media my-message">
										<div className="media-left">
											<a href="#">
												<img src="../../assets/images/staff2.jpg" className="img-circle" alt=""/>
											</a>
										</div>

										<div className="media-body">
											<div className="media-content">Tolerantly some understood this stubbornly after snarlingly
												frog far added insect into snorted more auspiciously heedless drunkenly jeez foolhardy oh.
											</div>
										</div>

										<div className="media-extra">
															<span className="text-muted text-size-mini" title="2 days ago
Tue 9 Jul 2018, 9:11am">
																Jul 9, 9:11am
															</span>
										</div>
									</li>

									<li className="media date-step content-divider">
										<span>New messages</span>
									</li>

									<li className="media">
										<div className="media-left">
											<a href="#">
												<img src="../../assets/images/avatar2.jpg" className="img-circle" alt=""/>
											</a>
										</div>

										<div className="media-body">
											<div className="media-content">Satisfactorily strenuously while sleazily dear frustratingly
												insect menially some shook far sardonic badger telepathic much jeepers immature much hey.
											</div>
										</div>

										<div className="media-extra">
															<span className="text-muted text-size-mini" title="Today
Thu 1 Mar 2018, 1:18pm">
																3 hrs ago
															</span>
										</div>
									</li>


									<li className="media">
										<div className="media-left">
											<a href="#">
												<img src="../../assets/images/avatar2.jpg" className="img-circle" alt=""/>
											</a>
										</div>

										<div className="media-body">
											<div className="media-content"><i className="icon-menu display-block"></i></div>
										</div>
									</li>
								</ul>

								<div className="pt-20 pb-20">
									<div className="add-comment pt-20">

													<textarea className="content-group mt-10" rows="3" cols="1" placeholder="Type here..."
																		style={{display: 'none'}}></textarea>

										<div className="row">
											<div className="col-xs-6">
												<ul className="icons-list icons-list-extended">
													<li>
														<div className="component-attachment-button-w-eddrive">
															<ul className="attachment-button icons-list mr-10">
																<li className="attach">
																	<a href="#"><span className="action-link" data-toggle="modal"
																										data-target="#modal-attachment-1"><i
																		className="icon-attachment"></i></span></a>
																</li>
															</ul>
														</div>
													</li>
												</ul>
											</div>

											<div className="col-xs-6 text-right">
												<button type="button"
																className="btn bg-teal-400 btn-labeled btn-labeled-right legitRipple"><b><i
													className="icon-circle-right2"></i></b> Send
												</button>
											</div>
										</div>
									</div>
								</div>

							</div>

							<div className="tab-pane fade has-padding" id="jeremy">
								<div className="row mb-20 text-right">
									<div className="col-xs-12">
										<a href="#" className="action-link" data-toggle="modal"
											 data-target="#modal-invite-participant" title="Message Settings"><i
											className="icon-cog3"></i></a>
									</div>
								</div>

								<ul className="media-list chat-list content-group">
									<li className="media">
										<div className="media-left">
											<a href="#">
												<img src="../../assets/images/staff2.jpg" className="img-circle" alt=""/>
											</a>
										</div>

										<div className="media-body">
											<div className="media-content">Crud reran and while much withdrew ardent much crab hugely
												met dizzily that more jeez gent equivalent unsafely far one hesitant so therefore.
											</div>
										</div>
										<div className="media-extra">
															<span className="text-muted text-size-mini" title="2 days ago
Mon 6 Jul 2018, 10:18pm">
																Jul 6, 10:18pm
															</span>
										</div>
									</li>

									<li className="media">
										<div className="media-left">
											<a href="#">
												<img src="../../assets/images/staff1.jpg" className="img-circle" alt=""/>
											</a>
										</div>

										<div className="media-body">
											<div className="media-content">Far squid and that hello fidgeted and when. As this oh darn
												but slapped casually husky sheared that cardinal hugely one and some unnecessary
												factiously hedgehog a feeling one rudely much
											</div>
										</div>

										<div className="media-extra">
															<span className="text-muted text-size-mini" title="2 days ago
Mon 6 Jul 2018, 11:48pm">
																Jul 6, 11:48pm
															</span>
										</div>
									</li>

									<li className="media">
										<div className="media-left">
											<a href="#">
												<img src="../../assets/images/staff2.jpg" className="img-circle" alt=""/>
											</a>
										</div>

										<div className="media-body">
											<div className="media-content">Tolerantly some understood this stubbornly after snarlingly
												frog far added insect into snorted more auspiciously heedless drunkenly jeez foolhardy oh.
											</div>
										</div>

										<div className="media-extra">
															<span className="text-muted text-size-mini" title="Yesterday
Wed 8 Jul 2018, 10:08am">
																Yesterday, 10:08am
															</span>
										</div>
									</li>

									<li className="media date-step content-divider">
										<span>New messages</span>
									</li>

									<li className="media">
										<div className="media-left">
											<a href="#">
												<img src="../../assets/images/staff1.jpg" className="img-circle" alt=""/>
											</a>
										</div>

										<div className="media-body">
											<div className="media-content">Satisfactorily strenuously while sleazily dear frustratingly
												insect menially some shook far sardonic badger telepathic much jeepers immature much hey.
											</div>
										</div>

										<div className="media-extra">
															<span className="text-muted text-size-mini" title="Today
Thu 9 Jul 2018, 11:25am">
																1 hr ago
															</span>
										</div>
									</li>

									<li className="media">
										<div className="media-left">
											<a href="#">
												<img src="../../assets/images/staff2.jpg" className="img-circle" alt=""/>
											</a>
										</div>

										<div className="media-body">
											<div className="media-content">Grunted smirked and grew less but rewound much despite and
												impressive via alongside out and gosh easy manatee dear ineffective yikes.
											</div>
										</div>

										<div className="media-extra">
															<span className="text-muted text-size-mini" title="Today
Thu 9 Jul 2018, 12:44am">
																26 mins ago<br/>
															</span>
										</div>
									</li>

									<li className="media">
										<div className="media-left">
											<a href="#">
												<img src="../../assets/images/staff1.jpg" className="img-circle" alt=""/>
											</a>
										</div>

										<div className="media-body">
											<div className="media-content"><i className="icon-menu display-block"></i></div>
										</div>
									</li>
								</ul>

								<div className="pt-20 pb-20">
									<div className="add-comment pt-20">

													<textarea className="content-group mt-10" rows="3" cols="1" placeholder="Type here..."
																		style={{display: 'none'}}></textarea>

										<div className="row">
											<div className="col-xs-6">
												<ul className="icons-list icons-list-extended">
													<li>
														<div className="component-attachment-button-w-eddrive">
															<ul className="attachment-button icons-list mr-10">
																<li className="attach">
																	<a href="#"><span className="action-link" data-toggle="modal"
																										data-target="#modal-attachment-1"><i
																		className="icon-attachment"></i></span></a>
																</li>
															</ul>
														</div>
													</li>
												</ul>
											</div>

											<div className="col-xs-6 text-right">
												<button type="button"
																className="btn bg-teal-400 btn-labeled btn-labeled-right legitRipple"><b><i
													className="icon-circle-right2"></i></b> Send
												</button>
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
	}
}

export default ChatBlock;