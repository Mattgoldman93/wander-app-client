import Ember from 'ember';

export default Ember.Component.extend({
  newPost: {
  content: null,
  attachment: null
  },
  actions: {
    createPost() {
      this.sendAction('createPost', this.get('newPost'))
      return this.set('newPost.content', null), this.set('newPost.attachment', null);
    }
  }
});
