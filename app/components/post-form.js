import Ember from 'ember';

export default Ember.Component.extend({
  newPost: {
  title: null,
  content: null,
  user: null
  },
  actions: {
    createPost() {
      this.sendAction('createPost', this.get('newPost'))
      return this.set('newPost.content', null), this.set('newPost.title', null)
    }
  }
});
