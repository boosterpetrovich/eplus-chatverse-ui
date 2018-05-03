/**
 * Created by Max3014 on 4/20/2018.
 */

'use strict';

const chat = (state = [], action) => {
	switch (action.type) {
	case 'ADD_MESSAGE':
		return [
			...state,
			{
				id: action.id,
				text: action.text,
				uploaded: false,
				viewed: false
			}
		];
	default:
		return state;
	}
}

export default chat;