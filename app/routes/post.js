import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
   return this.get('store').findRecord('post', params.post_id, {include: 'comments'});

 },
 actions: {
   deletePost(){
     let deleteThis = this.currentModel;
     deleteThis.destroyRecord();
     this.transitionTo('posts');
    },
    saveComment(comment) {
      console.log('model is: ', this.controller.get('model'))
      let post = this.controller.get('model');
      console.log('comment is: ', comment)
      console.log(this.get('store'))
      let newComment = this.get('store').createRecord('comment', {
        comment: comment,
        post: post
      });
      newComment.save();
    }
  }
});
