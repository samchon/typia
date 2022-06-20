export type TupleHierarchical = [
    boolean,
    undefined,
    number,
    [boolean, null, [number, [boolean, string]]],
    [
        number,
        Array<[string, boolean, Array<[number, number, [boolean, string]]>]>,
    ],
];
export namespace TupleHierarchical {
    export function generate(): TupleHierarchical {
        return [
            false,
            undefined,
            1,
            [false, null, [1, [false, "string"]]],
            [3, [["string", false, [[1, 1, [false, "string"]]]]]],
        ];
    }
}
