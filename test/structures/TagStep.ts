export interface TagStep {
    /**
     * @step 5
     * @exclusiveMinimum 3
     */
    exclusiveMinimum: number;

    /**
     * @step 5
     * @minimum 3
     */
    minimum: number;

    /**
     * @step 5
     * @range (0, 100)
     */
    range: number;

    /**
     * @multipleOf 5
     */
    multipleOf: number;
}
export namespace TagStep {
    // prettier-ignore
    export function generate(): TagStep[] {
        const output: TagStep[] = [];
        for (const exclusiveMinimum of [8, 8+5])
        for (const minimum of [3, 3+5])
        for (const range of [5, 95])
        for (const multipleOf of [5, 10])
            output.push({
                exclusiveMinimum, 
                minimum, 
                range, 
                multipleOf
            });
        return output;
    }
}
