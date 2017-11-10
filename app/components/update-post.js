import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
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
      post.save()
      .then(() => {
        this.get('flashMessages').success('Successfully Updated your post!')
      })
      .catch(() => {
        this.get('flashMessages').danger('You do not have permission to update this post! 👎')
        post.rollbackAttributes()
      });
    }
  }
});
