import {createRecord} from './Record';
import {applyMixins} from './applyMixins';

export interface IEntity {
  id: string;
}

const EntityRecord = createRecord<IEntity>({
    id: '',
},
'Entity');




export class Entity  extends EntityRecord implements IEntity {
    public readonly id: string;

    // update: Function; // implementation in Immutable.Record;

    constructor(params) {
      super(params);
    }

    updateId(id: string): Entity {
        return <Entity> this.update('id', () => {
          return id;
        });
    }
}
