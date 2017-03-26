import * as Immutable from 'immutable';
import {Entity} from './Entity';

const john = new Entity('USER:JOHN');

console.log(john);

// Emits error `Left-hand side of assignment expression cannot be a constant or a read-only property.`
// john.age = 21;

console.log(john);

const bob = john.updateId( 'USER:BOB');

const list = Immutable.List([john, bob]);

list.forEach(user => { console.log(user.id);});
