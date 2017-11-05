import Ember from 'ember';

export default Ember.Route.extend({
  model () {

  let users = this.get('store').findAll('user');
    console.log(users)
  },
});
