export type ObjectClosure = ObjectClosure.IRecord;
export namespace ObjectClosure {
    export interface IRecord {
        id: string;
        open: () => string;
    }
    export function generate() {
        return {
            id: "id",
            open: () => "detailed story",
        };
    }
}
