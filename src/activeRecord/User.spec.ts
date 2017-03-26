import * as Immutable from 'immutable';
import {User} from './User';
import {Entity} from './Entity';

const john = new User({
                   id: 'USER:JOHN',
                   name: "JOHN",
                   email: "john@gmail.com",
                   username: 'john1'
                  });

console.log(john);

// Emits error `Left-hand side of assignment expression cannot be a constant or a read-only property.`
// john.age = 21;

// console.log(john);

// const newUser: User = <Entity>john.updateId( 'USER:BOB');
const bob = john.updateName('Bob');

const list = Immutable.List([john, bob]);

list.forEach(user => { console.log(user.name);});
