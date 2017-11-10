import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  model: function(params) {
   return this.get('store').findRecord('post', params.post_id, {include: 'comments'});

 },
 actions: {
   deletePost(){
     let deleteThis = this.currentModel;
     deleteThis.destroyRecord()
     .then(()=> this.transitionTo('posts'))
     .then(()=> {
       this.get('flashMessages').success('Post Successfully Deleted 💣')
     })
     .catch(() => {
       this.get('flashMessages').danger('You do not have permission to delete this post');
     });
   },
    saveComment(comment) {
      let post = this.controller.get('model')
      let newComment = this.get('store').createRecord('comment', {
        comment: comment,
        post: post
      });
      newComment.save()
      .then(()=> {
        this.get('flashMessages').success('Nice! You posted a comment 🤙')
      })
      .catch(() => {
        this.get('flashMessages').danger('There was a problem. Please try again.')
      });
    }
  }
});
