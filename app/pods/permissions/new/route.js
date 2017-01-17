import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('permission');
  },

  actions: {
    save(permission) {
      permission.save()
                .then(() => {
                  this.transitionTo('roles');
                });
    }
  }
});
