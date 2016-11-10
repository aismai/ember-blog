import Ember from 'ember';

export default Ember.Route.extend({
  actions: {

    save(role) {
      role.save().then((savedRole) => {
        const user = this.get('authManager.currentUser');
        this.transitionTo('roles');
      });
    }
  }
  //
  // willTransition() {
  //   this.controller.get('model').unloadRecord();
  // }
});