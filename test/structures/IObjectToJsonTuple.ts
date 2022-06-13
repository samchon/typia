import { RandomGenerator } from "../internal/RandomGenerator";

export type IObjectToJsonTuple = [
    IObjectToJsonTuple.IToJson<string>,
    IObjectToJsonTuple.IToJson<number>,
    IObjectToJsonTuple.IToJson<boolean>,
    IObjectToJsonTuple.IObject,
    IObjectToJsonTuple.IWrapper,
    Array<
        | IObjectToJsonTuple.IToJson<string>
        | IObjectToJsonTuple.IToJson<number>
        | IObjectToJsonTuple.IToJson<boolean>
        | IObjectToJsonTuple.IObject
        | IObjectToJsonTuple.IWrapper
    >,
];
export namespace IObjectToJsonTuple {
    export interface IToJson<T> {
        toJSON(): T;
    }
    export type IObject = IToJson<IHobby>;
    export type IWrapper = IToJson<IObject>;
    export interface IHobby {
        code: string;
        name: string;
    }

    export function generate(): IObjectToJsonTuple {
        const items = () => [
            { toJSON: () => RandomGenerator.number() },
            { toJSON: () => RandomGenerator.string() },
            { toJSON: () => RandomGenerator.boolean() },
            {
                toJSON: () => ({
                    code: RandomGenerator.string(),
                    name: RandomGenerator.string(),
                }),
            },
            {
                toJSON: () => ({
                    toJSON: () => ({
                        code: RandomGenerator.string(),
                        name: RandomGenerator.string(),
                    }),
                }),
            },
        ];

        return [...items(), items()] as IObjectToJsonTuple;
    }
}
