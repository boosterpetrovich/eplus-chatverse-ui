/**
 * Created by Max3014 on 4/20/2018.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import EdCom from './modules/EdCom/index';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<EdCom.component/>
	</Provider>,
	document.getElementById('root')
);