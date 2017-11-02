import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
   return this.get('store').findRecord('post', params.post_id);
 },
 actions: {
   deletePost(){
         let deleteThis = this.currentModel;
         console.log('deleteThis is ', deleteThis)
         deleteThis.destroyRecord();
         this.transitionTo('posts');
       }
     }
});
