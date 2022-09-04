export interface TagType {
    /**
     * Integer value.
     *
     * @type int
     */
    int: number;

    /**
     * Unsigned integer value.
     *
     * @type uint
     */
    uint: number;
}
export namespace TagType {
    export function generate(): TagType[] {
        const output: TagType[] = [];
        for (const int of [-1, 0, 1])
            for (const uint of [0, 1, 2]) output.push({ int, uint });
        return output;
    }
}
