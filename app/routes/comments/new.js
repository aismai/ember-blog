import AuthenticatedRoute from '../authenticated-route';

export default AuthenticatedRoute.extend({

  model() {
    return this.store.createRecord('comment', {
      post: this.modelFor('posts.show'),
      user: this.get('authManager.currentUser')
    });
  },

  actions: {
    save(comment) {
      comment.save().then(() => {
        const post = comment.get('post');
        post.get('comments').pushObject(comment);
        post.save().then(() => {
          this.transitionTo('comments');
        });
      });
    },

    willTransition() {
      this.controller.get('model').unloadRecord();
    }
  }
});
