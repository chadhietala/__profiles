import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    console.log('profile model hook');
    return { id: 'hook ran' }
  }
});
