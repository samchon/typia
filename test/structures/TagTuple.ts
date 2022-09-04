export interface TagTuple {
    /**
     * @items [3, 7]
     * @range [3, 7]
     * @length [3, 7]
     */
    tuple: [string, number, string[], number[]];
}
export namespace TagTuple {
    export function generate(): TagTuple {
        return {
            tuple: ["123", 3, ["123", "234", "345"], [3, 4, 5, 6, 7]],
        };
    }
}
