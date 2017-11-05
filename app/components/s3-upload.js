import Ember from 'ember';
import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({

  filesDidChange: function(files) {
      const uploader = EmberUploader.Uploader.create({
        url: `http://localhost:4741/sign?name=5854315625_2275398b48_o.jpg&size=1269959&type=image%2Fjpeg`
      });

      if (!Ember.isEmpty(files)) {
        // a second argument is optional and can to be sent as extra data with the upload
        uploader.upload(files[0]);
      }
    }
});
