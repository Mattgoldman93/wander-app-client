import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  comment: DS.attr('string'),
  post: DS.belongsTo('post'),
  user_id: DS.belongsTo('user')
});
