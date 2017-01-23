import Ember from 'ember';
import objectFields from '../const/activityFields';

export default Ember.Service.extend({
  store:              Ember.inject.service('store'),
  authService:        Ember.inject.service('auth-service'),
  activities:         undefined,
  filteredActivities: undefined,

  init() {
    this._super(...arguments);
  },

  //todo: remove flash message popup, when new activity created
  createActivity(type, activityObject) {
    const activityObjectName = activityObject.constructor.modelName.capitalize();
    const objectModel        = {
      type:  activityObjectName,
      id:    activityObject.get('id'),
      title: activityObject.get(objectFields[activityObject.constructor.modelName])
    };

    const newActivity = this.get('store')
                            .createRecord('activity', {
                                type:      type,
                                user:      this.get('authService.currentUser'),
                                typeModel: objectModel
                              }
                            );
    // { adapterOptions: { flashMessage: false } - not working...
    newActivity.save({adapterOptions: {flashMessage: false}});
  }
});
