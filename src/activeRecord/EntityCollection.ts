import * as Immutable from 'immutable';
import {Entity} from './Entity';

const EntityCollectionRecord = Immutable.Record({
    collection: {},
    ids: []
}, 'EntityCollection');

export class EntityCollection extends EntityCollectionRecord {
      public readonly collection: {[key: string]: Entity},
      public readonly ids: string[]
    constructor(
      collection: {[key: string]: Entity},
      ids: string[]
    ) {
        super({ collection, ids });
    }

    // set id (id: string): User {
    //   this.update('_id', () => {
    //      return id;
    //   });
    // }

    updateCollection(collection: Immutable.Map<string, Entity>): EntityCollection {
        return <EntityCollection> this.update('collection', () => {
          return collection;
        });
    }
    updateIds(ids: Immutable.List<string>): EntityCollection {
        return <EntityCollection>this.update('ids',  () => {
          return ids;
        });
    }
}


