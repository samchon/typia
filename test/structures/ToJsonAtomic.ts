export type IObjectToJsonAtomic<T> = IObjectToJsonAtomic.IToJson<T>;
export namespace IObjectToJsonAtomic {
    export interface IToJson<T> {
        value: T;
        toJSON(): T;
    }

    export function generate<T>(value: T): IObjectToJsonAtomic<T> {
        return {
            value,
            toJSON: () => value,
        };
    }
}
