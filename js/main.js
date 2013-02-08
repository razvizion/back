var Person = Backbone.Model.extend({
	defaults:{
		name: 'Jone Doe',
		age:30,
		occupation: 'worker'
	},
	work: function() {
		return this.get('name')+' is working';
	}
});