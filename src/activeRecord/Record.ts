import {Record} from 'immutable';


// export const RecordMixin = (BaseRecord: Record.Class) => class extends BaseRecord {

// };



export function createRecord<T>(defaultValue: T, recordName: string){
   return Record(defaultValue, recordName);
}
