export type ObjectGenericAlias = ObjectGenericAlias.Alias;
export namespace ObjectGenericAlias {
    export type Alias = ISomething<string>;
    export interface ISomething<T> {
        value: T;
    }
    export function generate(): Alias {
        return {
            value: "something",
        };
    }
}
