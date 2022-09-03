import { RandomGenerator } from "../internal/RandomGenerator";

export interface TagLength {
    /**
     * @length 5
     */
    fixed: string;

    /**
     * @length (3
     */
    greater: string;

    /**
     * @length [3
     */
    greater_equal: string;

    /**
     * @length 7)
     */
    less: string;

    /**
     * @length 7]
     */
    less_equal: string;

    /**
     * @length (3, 7)
     */
    greater_less: string;

    /**
     * @length [3, 7)
     */
    greater_equal_less: string;

    /**
     * @length (3, 7]
     */
    greater_less_equal: string;

    /**
     * @length [3, 7]
     */
    greater_equal_less_equal: string;
}
export namespace TagLength {
    // prettier-ignore
    export function generate(): TagLength[] {
        const output: TagLength[] = [];

        for (const greater of [MINIMUM + 1, 10])
        for (const greater_equal of [MINIMUM, 10])
        for (const less of [0, MAXIMUM - 1])
        for (const less_equal of [0, MAXIMUM])
        for (const greater_less of [MINIMUM + 1, MAXIMUM - 1])
        for (const greater_equal_less of [MINIMUM, MAXIMUM - 1])
        for (const greater_less_equal of [MINIMUM + 1, MAXIMUM])
        for (const greater_equal_less_equal of [MINIMUM, MAXIMUM]) {
            const numeric = {
                fixed: FIXED,
                greater,
                greater_equal,
                less,
                less_equal,
                greater_less,
                greater_less_equal,
                greater_equal_less,
                greater_equal_less_equal,
            };
            const obj: TagLength = {} as any;
            for (const [key, value] of Object.entries(numeric))
                (obj as any)[key] = RandomGenerator.string(value);
            output.push(obj);
        }
        return output;
    }

    export const FIXED = 5;
    export const MINIMUM = 3;
    export const MAXIMUM = 7;
}
