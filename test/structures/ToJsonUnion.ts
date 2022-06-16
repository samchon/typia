export type IObjectToJsonWithUnion = Array<
    | string
    | number
    | IObjectToJsonWithUnion.ICitizen
    | IObjectToJsonWithUnion.IWrapper<boolean>
>;
export namespace IObjectToJsonWithUnion {
    export interface IWrapper<T> {
        toJSON(): T;
    }
    export interface ICitizen {
        id: number;
        mobile: string;
        name: string;
    }
    export function generate(): IObjectToJsonWithUnion {
        return [
            "string",
            0,
            {
                id: 0,
                mobile: "mobile",
                name: "name",
            },
            {
                toJSON: () => true,
            },
        ];
    }
}
