import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr('string'),
  attachment: DS.attr(),
  user_id: DS.attr(),
  updated_at: DS.attr('date'),
  created_at: DS.attr('date'),
});
