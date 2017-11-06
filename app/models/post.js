import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr('string'),
  user_id: DS.belongsTo('user'),
  updated_at: DS.attr('date'),
  created_at: DS.attr('date'),
  comments: DS.hasMany('comment', { async: true })
});
