export type IObjectToJsonArray<T> = IObjectToJsonArray.IArray<T>;
export namespace IObjectToJsonArray {
    export interface IArray<T> {
        toJSON(): T[];
    }

    export function generate<T>(array: T[]): IObjectToJsonArray<T> {
        return {
            toJSON: () => array,
        };
    }
}
