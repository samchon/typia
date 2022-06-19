export type IObjectToJsonTuple = [
    IObjectToJsonTuple.IToJson<string>,
    IObjectToJsonTuple.IToJson<number>,
    IObjectToJsonTuple.IToJson<boolean>,
    IObjectToJsonTuple.IObject,
];
export namespace IObjectToJsonTuple {
    export interface IToJson<T> {
        toJSON(): T;
    }
    export type IObject = IToJson<IHobby>;
    export interface IHobby {
        code: string;
        name: string;
    }

    export function generate(): IObjectToJsonTuple {
        return [
            { toJSON: () => "2" },
            { toJSON: () => 1 },
            { toJSON: () => false },
            {
                toJSON: () => ({
                    code: "code",
                    name: "name",
                }),
            },
        ];
    }
}
