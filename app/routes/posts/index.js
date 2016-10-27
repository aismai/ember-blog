import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //TODO: reload model before showing all posts
    //done
    return this.modelFor('blogs.show').reload();
  },

  actions: {
    deletePost(post) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        let blog = post.get('blog');
        blog.get('posts').removeObject(post);
        blog.save().then(() => {
          post.destroyRecord();
        });
      }
    }
  }
});
