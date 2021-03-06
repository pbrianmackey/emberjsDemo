var Person = Ember.Object.extend({
  say(thing) {
    var name = this.get('name');
    alert(`${name} says: ${thing}`);
  }
});

var Soldier = Person.extend({
say(thing) {
  // this will call the method in the parent class (Person#say), appending
  // the string ', sir!' to the variable `thing` passed in
  this._super(`${thing}, sir!`);
}
});

export {Soldier};
