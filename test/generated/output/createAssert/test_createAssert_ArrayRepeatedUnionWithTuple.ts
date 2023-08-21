import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ArrayRepeatedUnionWithTuple } from "../../../structures/ArrayRepeatedUnionWithTuple";

export const test_assert_ArrayRepeatedUnionWithTuple = _test_assert(
    "ArrayRepeatedUnionWithTuple",
)<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)(
    (input: any): ArrayRepeatedUnionWithTuple => {
        const __is = (input: any): input is ArrayRepeatedUnionWithTuple => {
            const $ip0 = (input: any) => {
                const array = input;
                const tuplePredicators = [
                    [
                        (top: any[]): any =>
                            top.length === 3 &&
                            "string" === typeof top[0] &&
                            "number" === typeof top[1] &&
                            Number.isFinite(top[1]) &&
                            "boolean" === typeof top[2],
                        (entire: any[]): any =>
                            entire.length === 3 &&
                            "string" === typeof entire[0] &&
                            "number" === typeof entire[1] &&
                            Number.isFinite(entire[1]) &&
                            "boolean" === typeof entire[2],
                    ],
                    [
                        (top: any[]): any =>
                            top.length === 2 &&
                            "object" === typeof top[0] &&
                            null !== top[0] &&
                            $io0(top[0]) &&
                            "object" === typeof top[1] &&
                            null !== top[1] &&
                            $io1(top[1]),
                        (entire: any[]): any =>
                            entire.length === 2 &&
                            "object" === typeof entire[0] &&
                            null !== entire[0] &&
                            $io0(entire[0]) &&
                            "object" === typeof entire[1] &&
                            null !== entire[1] &&
                            $io1(entire[1]),
                    ],
                ];
                for (const pred of tuplePredicators)
                    if (pred[0](array)) return pred[1](array);
                const top = input[0];
                if (0 === input.length) return true;
                const arrayPredicators = [
                    [
                        (top: any): any => "string" === typeof top,
                        (entire: any[]): any =>
                            entire.every(
                                (elem: any) => "string" === typeof elem,
                            ),
                    ],
                    [
                        (top: any): any =>
                            null !== top &&
                            undefined !== top &&
                            (("number" === typeof top &&
                                Number.isFinite(top)) ||
                                "boolean" === typeof top ||
                                (Array.isArray(top) && ($ip0(top) || false))),
                        (entire: any[]): any => $ia0(entire) || false,
                    ],
                    [
                        (top: any): any =>
                            "object" === typeof top &&
                            null !== top &&
                            $io0(top),
                        (entire: any[]): any =>
                            entire.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io0(elem),
                            ),
                    ],
                ];
                const passed = arrayPredicators.filter((pred: any) =>
                    pred[0](top),
                );
                if (1 === passed.length) return passed[0][1](array);
                else if (1 < passed.length)
                    for (const pred of passed)
                        if (
                            array.every((value: any) => true === pred[0](value))
                        )
                            return pred[1](array);
                return false;
            };
            const $io0 = (input: any): boolean =>
                "object" === typeof input.scale &&
                null !== input.scale &&
                "number" === typeof (input.scale as any).x &&
                Number.isFinite((input.scale as any).x) &&
                "number" === typeof (input.scale as any).y &&
                Number.isFinite((input.scale as any).y) &&
                "number" === typeof (input.scale as any).z &&
                Number.isFinite((input.scale as any).z) &&
                "object" === typeof input.position &&
                null !== input.position &&
                "number" === typeof (input.position as any).x &&
                Number.isFinite((input.position as any).x) &&
                "number" === typeof (input.position as any).y &&
                Number.isFinite((input.position as any).y) &&
                "number" === typeof (input.position as any).z &&
                Number.isFinite((input.position as any).z) &&
                "object" === typeof input.rotate &&
                null !== input.rotate &&
                "number" === typeof (input.rotate as any).x &&
                Number.isFinite((input.rotate as any).x) &&
                "number" === typeof (input.rotate as any).y &&
                Number.isFinite((input.rotate as any).y) &&
                "number" === typeof (input.rotate as any).z &&
                Number.isFinite((input.rotate as any).z) &&
                "object" === typeof input.pivot &&
                null !== input.pivot &&
                "number" === typeof (input.pivot as any).x &&
                Number.isFinite((input.pivot as any).x) &&
                "number" === typeof (input.pivot as any).y &&
                Number.isFinite((input.pivot as any).y) &&
                "number" === typeof (input.pivot as any).z &&
                Number.isFinite((input.pivot as any).z);
            const $io1 = (input: any): boolean =>
                "number" === typeof input.x &&
                Number.isFinite(input.x) &&
                "number" === typeof input.y &&
                Number.isFinite(input.y) &&
                "number" === typeof input.z &&
                Number.isFinite(input.z);
            const $ia0 = (input: any): any =>
                input.every(
                    (elem: any) =>
                        null !== elem &&
                        undefined !== elem &&
                        (("number" === typeof elem && Number.isFinite(elem)) ||
                            "boolean" === typeof elem ||
                            (Array.isArray(elem) && ($ip0(elem) || false))),
                );
            return (
                null !== input &&
                undefined !== input &&
                (("number" === typeof input && Number.isFinite(input)) ||
                    "boolean" === typeof input ||
                    (Array.isArray(input) && ($ip0(input) || false)))
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ArrayRepeatedUnionWithTuple => {
                const $guard = (typia.createAssert as any).guard;
                const $ap0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ) => {
                    const array = input;
                    const tuplePredicators = [
                        [
                            (top: any[]): any =>
                                top.length === 3 &&
                                "string" === typeof top[0] &&
                                "number" === typeof top[1] &&
                                Number.isFinite(top[1]) &&
                                "boolean" === typeof top[2],
                            (entire: any[]): any =>
                                (entire.length === 3 ||
                                    $guard(_exceptionable, {
                                        path: _path,
                                        expected: "[string, number, boolean]",
                                        value: entire,
                                    })) &&
                                ("string" === typeof entire[0] ||
                                    $guard(_exceptionable, {
                                        path: _path + "[0]",
                                        expected: "string",
                                        value: entire[0],
                                    })) &&
                                (("number" === typeof entire[1] &&
                                    Number.isFinite(entire[1])) ||
                                    $guard(_exceptionable, {
                                        path: _path + "[1]",
                                        expected: "number",
                                        value: entire[1],
                                    })) &&
                                ("boolean" === typeof entire[2] ||
                                    $guard(_exceptionable, {
                                        path: _path + "[2]",
                                        expected: "boolean",
                                        value: entire[2],
                                    })),
                        ],
                        [
                            (top: any[]): any =>
                                top.length === 2 &&
                                "object" === typeof top[0] &&
                                null !== top[0] &&
                                $ao0(
                                    top[0],
                                    _path + "[0]",
                                    false && _exceptionable,
                                ) &&
                                "object" === typeof top[1] &&
                                null !== top[1] &&
                                $ao1(
                                    top[1],
                                    _path + "[1]",
                                    false && _exceptionable,
                                ),
                            (entire: any[]): any =>
                                (entire.length === 2 ||
                                    $guard(_exceptionable, {
                                        path: _path,
                                        expected:
                                            "[ArrayRepeatedUnionWithTuple.IBox3D, ArrayRepeatedUnionWithTuple.IPoint3D]",
                                        value: entire,
                                    })) &&
                                (((("object" === typeof entire[0] &&
                                    null !== entire[0]) ||
                                    $guard(_exceptionable, {
                                        path: _path + "[0]",
                                        expected:
                                            "ArrayRepeatedUnionWithTuple.IBox3D",
                                        value: entire[0],
                                    })) &&
                                    $ao0(
                                        entire[0],
                                        _path + "[0]",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + "[0]",
                                        expected:
                                            "ArrayRepeatedUnionWithTuple.IBox3D",
                                        value: entire[0],
                                    })) &&
                                (((("object" === typeof entire[1] &&
                                    null !== entire[1]) ||
                                    $guard(_exceptionable, {
                                        path: _path + "[1]",
                                        expected:
                                            "ArrayRepeatedUnionWithTuple.IPoint3D",
                                        value: entire[1],
                                    })) &&
                                    $ao1(
                                        entire[1],
                                        _path + "[1]",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + "[1]",
                                        expected:
                                            "ArrayRepeatedUnionWithTuple.IPoint3D",
                                        value: entire[1],
                                    })),
                        ],
                    ];
                    for (const pred of tuplePredicators)
                        if (pred[0](array)) return pred[1](array);
                    const top = input[0];
                    if (0 === input.length) return true;
                    const arrayPredicators = [
                        [
                            (top: any): any => "string" === typeof top,
                            (entire: any[]): any =>
                                entire.every(
                                    (elem: any, _index1: number) =>
                                        "string" === typeof elem ||
                                        $guard(_exceptionable, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "string",
                                            value: elem,
                                        }),
                                ),
                        ],
                        [
                            (top: any): any =>
                                null !== top &&
                                undefined !== top &&
                                (("number" === typeof top &&
                                    Number.isFinite(top)) ||
                                    "boolean" === typeof top ||
                                    (Array.isArray(top) &&
                                        ($ap0(
                                            top,
                                            _path + "[0]",
                                            false && _exceptionable,
                                        ) ||
                                            $guard(_exceptionable, {
                                                path: _path + "[0]",
                                                expected:
                                                    "[string, number, boolean] | [IBox3D, IPoint3D] | Array<string> | Array<ArrayRepeatedUnionWithTuple> | Array<ArrayRepeatedUnionWithTuple.IBox3D>",
                                                value: top,
                                            })))),
                            (entire: any[]): any =>
                                $aa0(entire, _path, true && _exceptionable) ||
                                $guard(_exceptionable, {
                                    path: _path,
                                    expected:
                                        "Array<ArrayRepeatedUnionWithTuple>",
                                    value: entire,
                                }),
                        ],
                        [
                            (top: any): any =>
                                "object" === typeof top &&
                                null !== top &&
                                $ao0(
                                    top,
                                    _path + "[0]",
                                    false && _exceptionable,
                                ),
                            (entire: any[]): any =>
                                entire.every(
                                    (elem: any, _index2: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path + "[" + _index2 + "]",
                                                expected:
                                                    "ArrayRepeatedUnionWithTuple.IBox3D",
                                                value: elem,
                                            })) &&
                                            $ao0(
                                                elem,
                                                _path + "[" + _index2 + "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path: _path + "[" + _index2 + "]",
                                            expected:
                                                "ArrayRepeatedUnionWithTuple.IBox3D",
                                            value: elem,
                                        }),
                                ),
                        ],
                    ];
                    const passed = arrayPredicators.filter((pred: any) =>
                        pred[0](top),
                    );
                    if (1 === passed.length) return passed[0][1](array);
                    else if (1 < passed.length)
                        for (const pred of passed)
                            if (
                                array.every(
                                    (value: any) => true === pred[0](value),
                                )
                            )
                                return pred[1](array);
                    return $guard(_exceptionable, {
                        path: _path,
                        expected:
                            "([string, number, boolean] | [IBox3D, IPoint3D] | Array<string> | Array<ArrayRepeatedUnionWithTuple> | Array<ArrayRepeatedUnionWithTuple.IBox3D>)",
                        value: input,
                    });
                };
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((("object" === typeof input.scale &&
                        null !== input.scale) ||
                        $guard(_exceptionable, {
                            path: _path + ".scale",
                            expected: "ArrayRepeatedUnionWithTuple.IPoint3D",
                            value: input.scale,
                        })) &&
                        $ao1(
                            input.scale,
                            _path + ".scale",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".scale",
                            expected: "ArrayRepeatedUnionWithTuple.IPoint3D",
                            value: input.scale,
                        })) &&
                    (((("object" === typeof input.position &&
                        null !== input.position) ||
                        $guard(_exceptionable, {
                            path: _path + ".position",
                            expected: "ArrayRepeatedUnionWithTuple.IPoint3D",
                            value: input.position,
                        })) &&
                        $ao1(
                            input.position,
                            _path + ".position",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".position",
                            expected: "ArrayRepeatedUnionWithTuple.IPoint3D",
                            value: input.position,
                        })) &&
                    (((("object" === typeof input.rotate &&
                        null !== input.rotate) ||
                        $guard(_exceptionable, {
                            path: _path + ".rotate",
                            expected: "ArrayRepeatedUnionWithTuple.IPoint3D",
                            value: input.rotate,
                        })) &&
                        $ao1(
                            input.rotate,
                            _path + ".rotate",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".rotate",
                            expected: "ArrayRepeatedUnionWithTuple.IPoint3D",
                            value: input.rotate,
                        })) &&
                    (((("object" === typeof input.pivot &&
                        null !== input.pivot) ||
                        $guard(_exceptionable, {
                            path: _path + ".pivot",
                            expected: "ArrayRepeatedUnionWithTuple.IPoint3D",
                            value: input.pivot,
                        })) &&
                        $ao1(
                            input.pivot,
                            _path + ".pivot",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".pivot",
                            expected: "ArrayRepeatedUnionWithTuple.IPoint3D",
                            value: input.pivot,
                        }));
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.x &&
                        Number.isFinite(input.x)) ||
                        $guard(_exceptionable, {
                            path: _path + ".x",
                            expected: "number",
                            value: input.x,
                        })) &&
                    (("number" === typeof input.y &&
                        Number.isFinite(input.y)) ||
                        $guard(_exceptionable, {
                            path: _path + ".y",
                            expected: "number",
                            value: input.y,
                        })) &&
                    (("number" === typeof input.z &&
                        Number.isFinite(input.z)) ||
                        $guard(_exceptionable, {
                            path: _path + ".z",
                            expected: "number",
                            value: input.z,
                        }));
                const $aa0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    input.every(
                        (elem: any, _index3: number) =>
                            (null !== elem ||
                                $guard(_exceptionable, {
                                    path: _path + "[" + _index3 + "]",
                                    expected:
                                        "(Array<ArrayRepeatedUnionWithTuple.IBox3D> | Array<ArrayRepeatedUnionWithTuple> | Array<string> | [IBox3D, IPoint3D] | [string, number, boolean] | boolean | number)",
                                    value: elem,
                                })) &&
                            (undefined !== elem ||
                                $guard(_exceptionable, {
                                    path: _path + "[" + _index3 + "]",
                                    expected:
                                        "(Array<ArrayRepeatedUnionWithTuple.IBox3D> | Array<ArrayRepeatedUnionWithTuple> | Array<string> | [IBox3D, IPoint3D] | [string, number, boolean] | boolean | number)",
                                    value: elem,
                                })) &&
                            (("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                                "boolean" === typeof elem ||
                                ((Array.isArray(elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + "[" + _index3 + "]",
                                        expected:
                                            "(Array<ArrayRepeatedUnionWithTuple.IBox3D> | Array<ArrayRepeatedUnionWithTuple> | Array<string> | [IBox3D, IPoint3D] | [string, number, boolean] | boolean | number)",
                                        value: elem,
                                    })) &&
                                    ($ap0(
                                        elem,
                                        _path + "[" + _index3 + "]",
                                        true && _exceptionable,
                                    ) ||
                                        $guard(_exceptionable, {
                                            path: _path + "[" + _index3 + "]",
                                            expected:
                                                "[string, number, boolean] | [IBox3D, IPoint3D] | Array<string> | Array<ArrayRepeatedUnionWithTuple> | Array<ArrayRepeatedUnionWithTuple.IBox3D>",
                                            value: elem,
                                        }))) ||
                                $guard(_exceptionable, {
                                    path: _path + "[" + _index3 + "]",
                                    expected:
                                        "(Array<ArrayRepeatedUnionWithTuple.IBox3D> | Array<ArrayRepeatedUnionWithTuple> | Array<string> | [IBox3D, IPoint3D] | [string, number, boolean] | boolean | number)",
                                    value: elem,
                                })),
                    );
                return (
                    (null !== input ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "(Array<ArrayRepeatedUnionWithTuple.IBox3D> | Array<ArrayRepeatedUnionWithTuple> | Array<string> | [IBox3D, IPoint3D] | [string, number, boolean] | boolean | number)",
                            value: input,
                        })) &&
                    (undefined !== input ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "(Array<ArrayRepeatedUnionWithTuple.IBox3D> | Array<ArrayRepeatedUnionWithTuple> | Array<string> | [IBox3D, IPoint3D] | [string, number, boolean] | boolean | number)",
                            value: input,
                        })) &&
                    (("number" === typeof input && Number.isFinite(input)) ||
                        "boolean" === typeof input ||
                        ((Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "(Array<ArrayRepeatedUnionWithTuple.IBox3D> | Array<ArrayRepeatedUnionWithTuple> | Array<string> | [IBox3D, IPoint3D] | [string, number, boolean] | boolean | number)",
                                value: input,
                            })) &&
                            ($ap0(input, _path + "", true && _exceptionable) ||
                                $guard(_exceptionable, {
                                    path: _path + "",
                                    expected:
                                        "[string, number, boolean] | [IBox3D, IPoint3D] | Array<string> | Array<ArrayRepeatedUnionWithTuple> | Array<ArrayRepeatedUnionWithTuple.IBox3D>",
                                    value: input,
                                }))) ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "(Array<ArrayRepeatedUnionWithTuple.IBox3D> | Array<ArrayRepeatedUnionWithTuple> | Array<string> | [IBox3D, IPoint3D] | [string, number, boolean] | boolean | number)",
                            value: input,
                        }))
                );
            })(input, "$input", true);
        return input;
    },
);
