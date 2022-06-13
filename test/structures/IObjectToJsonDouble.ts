import { RandomGenerator } from "../internal/RandomGenerator";

export type IObjectToJsonDouble = IObjectToJsonDouble.IWapper;
export namespace IObjectToJsonDouble {
    export type IWapper = IToJson<IObject>;
    export type IObject = IToJson<IHobby>;
    export interface IHobby {
        code: string;
        name: string;
    }
    interface IToJson<T> {
        toJSON(): T;
    }

    export function generate(): IObjectToJsonDouble {
        return {
            toJSON: () => ({
                toJSON: () => ({
                    code: RandomGenerator.string(),
                    name: RandomGenerator.string(),
                }),
            }),
        };
    }
}
