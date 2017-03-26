import {createRecord} from './Record';
import {applyMixins} from './applyMixins';

import {Entity, IEntity} from './Entity';

export interface IUser extends IEntity {
  name: string;
  email: string;
  username: string;
}

const UserRecord = createRecord<IUser>({
    id: '',
    name: '',
    email: '',
    username: ''
},
'User');


export class User extends UserRecord implements IUser {
    public readonly id: string;
    public readonly name: string;
    public readonly email: string;
    public readonly username: string;

    constructor(params) {
        super(params);
    }

    // set id (id: string): User {
    //   this.update('_id', () => {
    //      return id;
    //   });
    // }

    updateId(id: string): Entity {
        return <Entity> this.update('id', () => {
          return id;
        });
    }

    updateName(name: string): User {
        return <User>this.update('name',  () => {
          return name;
        });
    }
}



applyMixins(User,  [Entity]);
