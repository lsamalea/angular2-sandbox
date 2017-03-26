import * as Immutable from 'immutable';
import {EntityCollection} from './EntityCollection';
import {User} from './User';
import {Entity} from './Entity';

const john = new User({
                   id: 'USER:JOHN',
                   name: "JOHN",
                   email: "john@gmail.com",
                   username: 'john1'
                  });

const bob = john.updateName("Bob");

const collection = {
      [john.name]: john,
      [bob.name]: bob
    };
const ids = [john.name, bob.name];

const entityCollection = new EntityCollection( collection, ids);


entityCollection.ids.forEach(id => {
                           console.log(
                              entityCollection.collection[id]
                           );
                          });
