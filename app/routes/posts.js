import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model() {
    return this.get('store').findAll('post');
  },
  actions: {
    createPost (post) {
    let newPost = this.get('store').createRecord('post', post);
    newPost.save()
    .then(() => {
      this.get('flashMessages')
      .success('Successfully Posted!');
    })
    .catch(() => {
      this.get('flashMessages').danger('There was a problem. Please try again.');
      this.transitionTo('sign-up');
    });
    },
  }
});
