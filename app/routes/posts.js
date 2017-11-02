import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('post');
  },
  actions: {
    createPost (post) {
    let newPost = this.get('store').createRecord('post', post);
    newPost.save();
    }
  }
});
