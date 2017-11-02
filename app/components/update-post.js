import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        content: this.get('content'),
        attachment: this.get('attachment'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
