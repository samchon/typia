import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

export type ObjectRecursive = ObjectRecursive.IDepartment;
export namespace ObjectRecursive {
    export interface IDepartment {
        parent: IDepartment | null;
        id: number;
        code: string;
        name: string;
        sequence: number;
        created_at: ITimestamp;
    }
    export interface ITimestamp {
        time: number;
        zone: number;
    }

    export function generate(
        limit: number = 10,
        index: number = 0,
    ): ObjectRecursive {
        return {
            id: RandomGenerator.integer(),
            name: RandomGenerator.string(),
            code: RandomGenerator.string(),
            sequence: RandomGenerator.integer(),
            created_at: {
                time: RandomGenerator.integer(),
                zone: RandomGenerator.integer(),
            },
            parent: index < limit ? generate(limit, index + 1) : null,
        };
    }

    export function trail(): ObjectRecursive {
        const data: ObjectRecursive = ObjectRecursive.generate();
        SPOILERS[1](data);
        return data;
    }

    export const SPOILERS: Spoiler<ObjectRecursive>[] = [
        (input) => {
            input.parent!.parent!.parent!.created_at.time = "zone" as any;
            return ["$input.parent.parent.parent.created_at.time"];
        },
        (input) => {
            const current: { value: ObjectRecursive } = { value: input };
            const paths: string[] = ["$input.parent"];

            while (current.value.parent !== null) {
                current.value = current.value.parent;
                paths.push("parent");
            }
            current.value.parent = {} as any;
            return [
                "id",
                "code",
                "name",
                "parent",
                "sequence",
                "created_at",
            ].map((key) => `${paths.join(".")}.${key}`);
        },
    ];
}
