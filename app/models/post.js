import DS from 'ember-data';

export default DS.Model.extend({
  attachment: DS.attr('string'),
  content: DS.attr('string')
});
