import Ember from 'ember';
import Soldier from '../utils/person';

export default Ember.Component.extend({
  actions: {
    saySomething() {
      console.log('attempting to say something');
      console.log(Soldier);
      var yehuda = Soldier.create({
        name: 'Yehuda Katz'
      });

      console.log('2');

      yehuda.say('Yes'); // alerts "Yehuda Katz says: Yes, sir!"
    }
  }
});
