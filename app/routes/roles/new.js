import Ember from 'ember';

export default Ember.Route.extend({
  // TODO: close route != admin
  actions: {

    save(role) {
      role.save().then(() => {
        // const user = this.get('authManager.currentUser');
        this.transitionTo('roles');
      });
    }
  }
  //
  // willTransition() {
  //   this.controller.get('model').unloadRecord();
  // }
});
