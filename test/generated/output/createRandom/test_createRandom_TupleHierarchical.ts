import typia from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_random } from "../internal/_test_random";
export const test_createRandom_TupleHierarchical = _test_random("TupleHierarchical", (generator: typia.IRandomGenerator = (typia.createRandom as any).generator) => {
    const $generator = (typia.createRandom as any).generator;
    return [
        (generator.boolean ?? $generator.boolean)(),
        null,
        (generator.number ?? $generator.number)(0, 100),
        [
            (generator.boolean ?? $generator.boolean)(),
            null,
            [
                (generator.number ?? $generator.number)(0, 100),
                [
                    (generator.boolean ?? $generator.boolean)(),
                    (generator.string ?? $generator.string)()
                ]
            ]
        ],
        [
            (generator.number ?? $generator.number)(0, 100),
            (generator.array ?? $generator.array)(() => [
                (generator.string ?? $generator.string)(),
                (generator.boolean ?? $generator.boolean)(),
                (generator.array ?? $generator.array)(() => [
                    (generator.number ?? $generator.number)(0, 100),
                    (generator.number ?? $generator.number)(0, 100),
                    [
                        (generator.boolean ?? $generator.boolean)(),
                        (generator.string ?? $generator.string)()
                    ]
                ])
            ])
        ]
    ];
}, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is (number | boolean | [boolean, null, [number, [boolean, string]]] | [number, [string, boolean, [number, number, [boolean, string]][]][]])[] => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<([boolean, null, [number, [boolean, string]]] | [number, Array<[string, boolean, Array<[number, number, [boolean, string]]>]>] | boolean | number)>",
            value: input
        })) && input.every((elem: any, _index1: number) => (null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "([boolean, null, [number, [boolean, string]]] | [number, Array<[string, boolean, Array<[number, number, [boolean, string]]>]>] | boolean | number)",
            value: elem
        })) && (undefined !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "([boolean, null, [number, [boolean, string]]] | [number, Array<[string, boolean, Array<[number, number, [boolean, string]]>]>] | boolean | number)",
            value: elem
        })) && ("number" === typeof elem || "boolean" === typeof elem || (Array.isArray(elem) || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "([boolean, null, [number, [boolean, string]]] | [number, Array<[string, boolean, Array<[number, number, [boolean, string]]>]>] | boolean | number)",
            value: elem
        })) && (() => {
            const tupleList = [[top => elem.length === 3 && "boolean" === typeof elem[0] && (undefined !== elem[1] && null === elem[1]) && (Array.isArray(elem[2]) && (elem[2].length === 2 && "number" === typeof elem[2][0] && (Array.isArray(elem[2][1]) && (elem[2][1].length === 2 && "boolean" === typeof elem[2][1][0] && "string" === typeof elem[2][1][1])))), top => (top.length === 3 || $guard(true, {
                        path: _path + "[" + _index1 + "]",
                        expected: "[boolean, null, [number, [boolean, string]]]",
                        value: top
                    })) && ("boolean" === typeof top[0] || $guard(true, {
                        path: _path + "[" + _index1 + "][0]",
                        expected: "boolean",
                        value: top[0]
                    })) && ((undefined !== top[1] || $guard(true, {
                        path: _path + "[" + _index1 + "][1]",
                        expected: "null",
                        value: top[1]
                    })) && (null === top[1] || $guard(true, {
                        path: _path + "[" + _index1 + "][1]",
                        expected: "null",
                        value: top[1]
                    }))) && ((Array.isArray(top[2]) || $guard(true, {
                        path: _path + "[" + _index1 + "][2]",
                        expected: "[number, [boolean, string]]",
                        value: top[2]
                    })) && ((top[2].length === 2 || $guard(true, {
                        path: _path + "[" + _index1 + "][2]",
                        expected: "[number, [boolean, string]]",
                        value: top[2]
                    })) && ("number" === typeof top[2][0] || $guard(true, {
                        path: _path + "[" + _index1 + "][2][0]",
                        expected: "number",
                        value: top[2][0]
                    })) && ((Array.isArray(top[2][1]) || $guard(true, {
                        path: _path + "[" + _index1 + "][2][1]",
                        expected: "[boolean, string]",
                        value: top[2][1]
                    })) && ((top[2][1].length === 2 || $guard(true, {
                        path: _path + "[" + _index1 + "][2][1]",
                        expected: "[boolean, string]",
                        value: top[2][1]
                    })) && ("boolean" === typeof top[2][1][0] || $guard(true, {
                        path: _path + "[" + _index1 + "][2][1][0]",
                        expected: "boolean",
                        value: top[2][1][0]
                    })) && ("string" === typeof top[2][1][1] || $guard(true, {
                        path: _path + "[" + _index1 + "][2][1][1]",
                        expected: "string",
                        value: top[2][1][1]
                    }))))))], [top => elem.length === 2 && "number" === typeof elem[0] && (Array.isArray(elem[1]) && elem[1].every((elem: any, _index2: number) => Array.isArray(elem) && (elem.length === 3 && "string" === typeof elem[0] && "boolean" === typeof elem[1] && (Array.isArray(elem[2]) && elem[2].every((elem: any, _index3: number) => Array.isArray(elem) && (elem.length === 3 && "number" === typeof elem[0] && "number" === typeof elem[1] && (Array.isArray(elem[2]) && (elem[2].length === 2 && "boolean" === typeof elem[2][0] && "string" === typeof elem[2][1])))))))), top => (top.length === 2 || $guard(true, {
                        path: _path + "[" + _index1 + "]",
                        expected: "[number, Array<[string, boolean, Array<[number, number, [boolean, string]]>]>]",
                        value: top
                    })) && ("number" === typeof top[0] || $guard(true, {
                        path: _path + "[" + _index1 + "][0]",
                        expected: "number",
                        value: top[0]
                    })) && ((Array.isArray(top[1]) || $guard(true, {
                        path: _path + "[" + _index1 + "][1]",
                        expected: "Array<[string, boolean, Array<[number, number, [boolean, string]]>]>",
                        value: top[1]
                    })) && top[1].every((elem: any, _index4: number) => (Array.isArray(elem) || $guard(true, {
                        path: _path + "[" + _index1 + "][1][" + _index4 + "]",
                        expected: "[string, boolean, Array<[number, number, [boolean, string]]>]",
                        value: elem
                    })) && ((elem.length === 3 || $guard(true, {
                        path: _path + "[" + _index1 + "][1][" + _index4 + "]",
                        expected: "[string, boolean, Array<[number, number, [boolean, string]]>]",
                        value: elem
                    })) && ("string" === typeof elem[0] || $guard(true, {
                        path: _path + "[" + _index1 + "][1][" + _index4 + "][0]",
                        expected: "string",
                        value: elem[0]
                    })) && ("boolean" === typeof elem[1] || $guard(true, {
                        path: _path + "[" + _index1 + "][1][" + _index4 + "][1]",
                        expected: "boolean",
                        value: elem[1]
                    })) && ((Array.isArray(elem[2]) || $guard(true, {
                        path: _path + "[" + _index1 + "][1][" + _index4 + "][2]",
                        expected: "Array<[number, number, [boolean, string]]>",
                        value: elem[2]
                    })) && elem[2].every((elem: any, _index5: number) => (Array.isArray(elem) || $guard(true, {
                        path: _path + "[" + _index1 + "][1][" + _index4 + "][2][" + _index5 + "]",
                        expected: "[number, number, [boolean, string]]",
                        value: elem
                    })) && ((elem.length === 3 || $guard(true, {
                        path: _path + "[" + _index1 + "][1][" + _index4 + "][2][" + _index5 + "]",
                        expected: "[number, number, [boolean, string]]",
                        value: elem
                    })) && ("number" === typeof elem[0] || $guard(true, {
                        path: _path + "[" + _index1 + "][1][" + _index4 + "][2][" + _index5 + "][0]",
                        expected: "number",
                        value: elem[0]
                    })) && ("number" === typeof elem[1] || $guard(true, {
                        path: _path + "[" + _index1 + "][1][" + _index4 + "][2][" + _index5 + "][1]",
                        expected: "number",
                        value: elem[1]
                    })) && ((Array.isArray(elem[2]) || $guard(true, {
                        path: _path + "[" + _index1 + "][1][" + _index4 + "][2][" + _index5 + "][2]",
                        expected: "[boolean, string]",
                        value: elem[2]
                    })) && ((elem[2].length === 2 || $guard(true, {
                        path: _path + "[" + _index1 + "][1][" + _index4 + "][2][" + _index5 + "][2]",
                        expected: "[boolean, string]",
                        value: elem[2]
                    })) && ("boolean" === typeof elem[2][0] || $guard(true, {
                        path: _path + "[" + _index1 + "][1][" + _index4 + "][2][" + _index5 + "][2][0]",
                        expected: "boolean",
                        value: elem[2][0]
                    })) && ("string" === typeof elem[2][1] || $guard(true, {
                        path: _path + "[" + _index1 + "][1][" + _index4 + "][2][" + _index5 + "][2][1]",
                        expected: "string",
                        value: elem[2][1]
                    }))))))))))]];
            const front = elem;
            const filtered = tupleList.filter(tuple => true === tuple[0](front));
            if (1 === filtered.length)
                return filtered[0][1](elem);
            const array = elem;
            if (1 < filtered.length)
                for (const tuple of filtered)
                    if (array.every((value: any) => true === tuple[0](value)))
                        return tuple[1](array);
            return $guard(_exceptionable, {
                path: _path + "[" + _index1 + "]",
                expected: "([boolean, null, [number, [boolean, string]]] | [number, Array<[string, boolean, Array<[number, number, [boolean, string]]>]>])",
                value: elem
            });
        })()));
    })(input, "$input", true);
    return input as typia.Primitive<TupleHierarchical>;
});
