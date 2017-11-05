import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
   return this.get('store').findRecord('post', params.post_id);
 },
 actions: {
   deletePost(){
         let deleteThis = this.currentModel;
         deleteThis.destroyRecord();
         this.transitionTo('posts');
       }
     },
     update(post, params) {
       console.log('routes/post.js reached')
       Object.keys(params).forEach(function(key) {
       if(params[key]!==undefined) {
         post.set(key,params[key]);
         }
       });
       post.save();
       this.transitionTo('posts');
     }
});
