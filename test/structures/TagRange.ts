export interface TagRange {
    /**
     * @minimum 3
     */
    minimum: number;

    /**
     * @maximum 7
     */
    maximum: number;

    /**
     * @minimum 3
     * @maximum 7
     */
    minimum_and_maximum: number;

    /**
     * @range (3
     */
    greater: number;

    /**
     * @range [3
     */
    greater_equal: number;

    /**
     * @range 7)
     */
    less: number;

    /**
     * @range 7]
     */
    less_equal: number;

    /**
     * @range (3, 7)
     */
    greater_less: number;

    /**
     * @range [3, 7)
     */
    greater_equal_less: number;

    /**
     * @range (3, 7]
     */
    greater_less_equal: number;

    /**
     * @range [3, 7]
     */
    greater_equal_less_equal: number;
}
export namespace TagRange {
    // prettier-ignore
    export function generate(): TagRange[] {
        const output: TagRange[] = [];

        for (const minimum of [MINIMUM, 10])
        for (const maximum of [0, MAXIMUM])
        for (const minimum_and_maximum of [MINIMUM, MAXIMUM])
        for (const greater of [MINIMUM + 1, 10])
        for (const greater_equal of [MINIMUM, 10])
        for (const less of [0, MAXIMUM - 1])
        for (const less_equal of [0, MAXIMUM])
        for (const greater_less of [MINIMUM + 1, MAXIMUM - 1])
        for (const greater_equal_less of [MINIMUM, MAXIMUM - 1])
        for (const greater_less_equal of [MINIMUM + 1, MAXIMUM])
        for (const greater_equal_less_equal of [MINIMUM, MAXIMUM])
            output.push({
                minimum,
                maximum,
                minimum_and_maximum,
                greater,
                greater_equal,
                less,
                less_equal,
                greater_less,
                greater_less_equal,
                greater_equal_less,
                greater_equal_less_equal,
            });
        return output;
    }

    export const MINIMUM = 3;
    export const MAXIMUM = 7;
}
