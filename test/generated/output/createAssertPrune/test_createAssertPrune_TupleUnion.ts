import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { TupleUnion } from "../../../structures/TupleUnion";

export const test_createAssertPrune_TupleUnion = _test_assertPrune(
    "TupleUnion",
    TupleUnion.generate,
    (input: any): TupleUnion => {
        const assert: any = (input: any): TupleUnion => {
            const __is: any = (input: any): input is TupleUnion => {
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            Array.isArray(elem) &&
                            (() => {
                                const array: any = elem;
                                const tuplePredicators: any = [
                                    [
                                        (top: any[]): any =>
                                            top.length === 3 &&
                                            "number" === typeof top[0] &&
                                            Number.isFinite(top[0]) &&
                                            "string" === typeof top[1] &&
                                            "boolean" === typeof top[2],
                                        (entire: any[]): any =>
                                            entire.length === 3 &&
                                            "number" === typeof entire[0] &&
                                            Number.isFinite(entire[0]) &&
                                            "string" === typeof entire[1] &&
                                            "boolean" === typeof entire[2],
                                    ],
                                    [
                                        (top: any[]): any =>
                                            top.length === 2 &&
                                            "boolean" === typeof top[0] &&
                                            "number" === typeof top[1] &&
                                            Number.isFinite(top[1]),
                                        (entire: any[]): any =>
                                            entire.length === 2 &&
                                            "boolean" === typeof entire[0] &&
                                            "number" === typeof entire[1] &&
                                            Number.isFinite(entire[1]),
                                    ],
                                    [
                                        (top: any[]): any => top.length === 0,
                                        (entire: any[]): any =>
                                            entire.length === 0,
                                    ],
                                ];
                                for (const pred of tuplePredicators)
                                    if (pred[0](array)) return pred[1](array);
                                return false;
                            })(),
                    )
                );
            };
            const $guard: any = (typia.createAssertPrune as any).guard;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TupleUnion => {
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TupleUnion",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (Array.isArray(elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "([] | [boolean, number] | [number, string, boolean])",
                                        value: elem,
                                    })) &&
                                (() => {
                                    const array: any = elem;
                                    const tuplePredicators: any = [
                                        [
                                            (top: any[]): any =>
                                                top.length === 3 &&
                                                "number" === typeof top[0] &&
                                                Number.isFinite(top[0]) &&
                                                "string" === typeof top[1] &&
                                                "boolean" === typeof top[2],
                                            (entire: any[]): any =>
                                                (entire.length === 3 ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "[number, string, boolean]",
                                                        value: entire,
                                                    })) &&
                                                (("number" ===
                                                    typeof entire[0] &&
                                                    Number.isFinite(
                                                        entire[0],
                                                    )) ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][0]",
                                                        expected: "number",
                                                        value: entire[0],
                                                    })) &&
                                                ("string" ===
                                                    typeof entire[1] ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][1]",
                                                        expected: "string",
                                                        value: entire[1],
                                                    })) &&
                                                ("boolean" ===
                                                    typeof entire[2] ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][2]",
                                                        expected: "boolean",
                                                        value: entire[2],
                                                    })),
                                        ],
                                        [
                                            (top: any[]): any =>
                                                top.length === 2 &&
                                                "boolean" === typeof top[0] &&
                                                "number" === typeof top[1] &&
                                                Number.isFinite(top[1]),
                                            (entire: any[]): any =>
                                                (entire.length === 2 ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "[boolean, number]",
                                                        value: entire,
                                                    })) &&
                                                ("boolean" ===
                                                    typeof entire[0] ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][0]",
                                                        expected: "boolean",
                                                        value: entire[0],
                                                    })) &&
                                                (("number" ===
                                                    typeof entire[1] &&
                                                    Number.isFinite(
                                                        entire[1],
                                                    )) ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][1]",
                                                        expected: "number",
                                                        value: entire[1],
                                                    })),
                                        ],
                                        [
                                            (top: any[]): any =>
                                                top.length === 0,
                                            (entire: any[]): any =>
                                                entire.length === 0 ||
                                                $guard(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected: "[]",
                                                    value: entire,
                                                }),
                                        ],
                                    ];
                                    for (const pred of tuplePredicators)
                                        if (pred[0](array))
                                            return pred[1](array);
                                    return $guard(_exceptionable, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "([number, string, boolean] | [boolean, number] | [])",
                                        value: elem,
                                    });
                                })(),
                        )
                    );
                })(input, "$input", true);
            return input;
        };
        const prune: any = (input: TupleUnion): void => {};
        assert(input);
        prune(input);
        return input;
    },
    TupleUnion.SPOILERS,
);
