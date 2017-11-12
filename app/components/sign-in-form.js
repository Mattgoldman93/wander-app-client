import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  actions: {
    submit () {
      this.sendAction('submit', this.get('credentials'));
      this.set('credentials', {});
    },

    reset () {
      this.set('credentials', {});
    },
  },
});
