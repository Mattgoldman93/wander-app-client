import Ember from 'ember';

export default Ember.Route.extend({
    updatePostForm: false,
  model() {
    return this.get('store').findAll('post');
  },
  actions: {
    createPost (post) {
    let newPost = this.get('store').createRecord('post', post);
    newPost.save();
  },
    update(post, params) {
      Object.keys(params).forEach(function(key) {
      if(params[key]!==undefined) {
        post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('posts');
    }
  }
});
