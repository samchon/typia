import { RandomGenerator } from "typia/lib/utils/RandomGenerator";

import { Spoiler } from "../helpers/Spoiler";

export interface MapSimpleProtobufNullable {
    boolean: null | Map<string, boolean>;

    /**
     * @type int32
     */
    int32: null | Map<string, number>;

    bigint: null | Map<string, bigint>;

    double: null | Map<string, number>;

    /**
     * @minLength 1
     */
    string: null | Map<string, string>;

    bytes: null | Map<string, Uint8Array>;

    objects: null | Map<string, MapSimpleProtobufNullable>;
}
export namespace MapSimpleProtobufNullable {
    export const ADDABLE = false;
    export const PRIMITIVE = false;
    export const JSONABLE = false;

    export function generate(level: number = 0): MapSimpleProtobufNullable {
        return {
            boolean: new Map(
                RandomGenerator.array(
                    () => [
                        RandomGenerator.string(10),
                        RandomGenerator.boolean(),
                    ],
                    4,
                ),
            ),
            int32: new Map(
                RandomGenerator.array(
                    () => [
                        RandomGenerator.string(10),
                        RandomGenerator.integer(),
                    ],
                    4,
                ),
            ),
            bigint: new Map(
                RandomGenerator.array(
                    () => [
                        RandomGenerator.string(10),
                        RandomGenerator.bigint(),
                    ],
                    4,
                ),
            ),
            double: new Map(
                RandomGenerator.array(
                    () => [
                        RandomGenerator.string(10),
                        RandomGenerator.number(),
                    ],
                    4,
                ),
            ),
            string: new Map(
                RandomGenerator.array(
                    () => [
                        RandomGenerator.string(10),
                        RandomGenerator.string(10),
                    ],
                    4,
                ),
            ),
            bytes: new Map(
                RandomGenerator.array(
                    () => [
                        RandomGenerator.string(10),
                        new Uint8Array([1, 2, 1, 2, 1, 2]),
                    ],
                    4,
                ),
            ),
            objects:
                level < 2
                    ? new Map(
                          RandomGenerator.array(
                              () => [
                                  RandomGenerator.string(10),
                                  generate(level + 1),
                              ],
                              4,
                          ),
                      )
                    : new Map([]),
        };
    }

    export const SPOILERS: Spoiler<MapSimpleProtobufNullable>[] = [
        (input) => {
            input.boolean?.set("wrong", 0 as any);
            return ["$input.boolean[4][1]"];
        },
        (input) => {
            input.int32?.set("wrong", 3.141592);
            return ["$input.int32[4][1]"];
        },
        (input) => {
            input.bigint?.set("wrong", 3 as any);
            return ["$input.bigint[4][1]"];
        },
        (input) => {
            input.double?.set("wrong", "3.14" as any);
            return ["$input.double[4][1]"];
        },
        (input) => {
            input.string?.set("wrong", 3 as any);
            return ["$input.string[4][1]"];
        },
        (input) => {
            input.bytes = undefined!;
            return ["$input.bytes"];
        },
        (input) => {
            input.objects = {} as any;
            return ["$input.objects"];
        },
        (input) => {
            input.objects = [] as any;
            return ["$input.objects"];
        },
    ];
}
