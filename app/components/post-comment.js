import Ember from 'ember';

export default Ember.Component.extend({
  newComment: {
    comment: null,
  },
  actions: {
    saveComment() {
      this.sendAction('saveComment', this.get('newComment.comment'));
      return this.set('newComment.comment', null);
    }
  }
});
