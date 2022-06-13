import { RandomGenerator } from "../internal/RandomGenerator";

export type IObjectSimple = IObjectSimple.IMember[];
export namespace IObjectSimple {
    export interface IMember {
        id: string | null;
        email: String;
        name: string;
        sex: "male" | "female" | 1 | 2 | null;
        age: number | null;
        dead: boolean | null;
    }

    export function generate(): IObjectSimple {
        const output: IObjectSimple = [];
        for (const id of [RandomGenerator.string(), null])
            for (const sex of ["male", "female", 1, 2, null] as const)
                for (const age of [RandomGenerator.number(), null])
                    for (const dead of [true, false, null])
                        output.push({
                            id,
                            email: RandomGenerator.string(),
                            name: RandomGenerator.string(),
                            sex,
                            age,
                            dead,
                        });
        return output;
    }
}
