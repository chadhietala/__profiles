import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return { id: 123, foo: 'bar'}
  }
});
