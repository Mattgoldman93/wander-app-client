import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      console.log(post)
      var params = {
        title: this.get('title'),
        content: this.get('content')
      };
      this.set('updatePostForm', false);
      Object.keys(params).forEach(function(key) {
      if(params[key]!==undefined) {
        post.set(key,params[key]);
        }
      });
      post.save();
    }
  }
});
