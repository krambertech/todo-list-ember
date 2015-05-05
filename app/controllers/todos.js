import Ember from 'ember';

export default Ember.ArrayController.extend({
	actions: {
		createTodo: function() {
			var title = this.get('newTitle');
			if ( !title || !title.trim() ) {
				return false;
			}

			var todo = this.store.createRecord('todo', {
				title: title,
				isCompleted: false
			});

			this.set('newTitle', '');

			todo.save();

		}
	},
	remaining: function() {
	  var n = this.filterBy('isCompleted', false).get('length');
	  return n;
	}.property('@each.isCompleted')
});