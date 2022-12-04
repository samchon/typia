export type ToJsonTuple = [
    ToJsonTuple.IToJson<string>,
    ToJsonTuple.IToJson<number>,
    ToJsonTuple.IToJson<boolean>,
    ToJsonTuple.IObject,
];
export namespace ToJsonTuple {
    export const PRIMITIVE = false;

    export interface IToJson<T> {
        toJSON: () => T;
    }
    export type IObject = IToJson<IHobby>;
    export interface IHobby {
        code: string;
        name: string;
    }

    export function generate(): ToJsonTuple {
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
