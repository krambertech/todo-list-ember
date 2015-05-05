import DS from 'ember-data';

var Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});

Todo.reopenClass({
	FIXTURES: [{
		id: 1,
		title: 'Talk to Snake',
		isCompleted: true
	},
	{
		id: 2,
		title: 'Get letter from Hogvarts',
		isCompleted: false
	},
	{
		id: 3,
		title: 'Do magical stuff',
		isCompleted: false
	}]
});

 export default Todo;