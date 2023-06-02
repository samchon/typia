import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ArrayRepeatedUnionWithTuple } from "../../../structures/ArrayRepeatedUnionWithTuple";

export const test_createAssert_ArrayRepeatedUnionWithTuple = _test_assert(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    (input: any): ArrayRepeatedUnionWithTuple => {
        const __is: any = (
            input: any,
        ): input is ArrayRepeatedUnionWithTuple => {
            const $ip0: any = () => {
                const array: any = input;
                const tuplePredicators: any = [
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
                const top: any = array[0];
                if (0 === input.length) return true;
                const arrayPredicators: any = [
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
                                (Array.isArray(top) && $ip0(top))),
                        (entire: any[]): any => $ia0(entire),
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
                const passed: any = arrayPredicators.filter((pred: any) =>
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
            const $io0: any = (input: any): boolean =>
                "object" === typeof input.scale &&
                null !== input.scale &&
                "number" === typeof input.scale.x &&
                Number.isFinite(input.scale.x) &&
                "number" === typeof input.scale.y &&
                Number.isFinite(input.scale.y) &&
                "number" === typeof input.scale.z &&
                Number.isFinite(input.scale.z) &&
                "object" === typeof input.position &&
                null !== input.position &&
                "number" === typeof input.position.x &&
                Number.isFinite(input.position.x) &&
                "number" === typeof input.position.y &&
                Number.isFinite(input.position.y) &&
                "number" === typeof input.position.z &&
                Number.isFinite(input.position.z) &&
                "object" === typeof input.rotate &&
                null !== input.rotate &&
                "number" === typeof input.rotate.x &&
                Number.isFinite(input.rotate.x) &&
                "number" === typeof input.rotate.y &&
                Number.isFinite(input.rotate.y) &&
                "number" === typeof input.rotate.z &&
                Number.isFinite(input.rotate.z) &&
                "object" === typeof input.pivot &&
                null !== input.pivot &&
                "number" === typeof input.pivot.x &&
                Number.isFinite(input.pivot.x) &&
                "number" === typeof input.pivot.y &&
                Number.isFinite(input.pivot.y) &&
                "number" === typeof input.pivot.z &&
                Number.isFinite(input.pivot.z);
            const $io1: any = (input: any): boolean =>
                "number" === typeof input.x &&
                Number.isFinite(input.x) &&
                "number" === typeof input.y &&
                Number.isFinite(input.y) &&
                "number" === typeof input.z &&
                Number.isFinite(input.z);
            const $ia0: any = (input: any): any =>
                input.every(
                    (elem: any) =>
                        null !== elem &&
                        undefined !== elem &&
                        (("number" === typeof elem && Number.isFinite(elem)) ||
                            "boolean" === typeof elem ||
                            (Array.isArray(elem) && $ip0(elem))),
                );
            return (
                null !== input &&
                undefined !== input &&
                (("number" === typeof input && Number.isFinite(input)) ||
                    "boolean" === typeof input ||
                    (Array.isArray(input) && $ip0(input)))
            );
        };
        const $guard: any = (typia.createAssert as any).guard;
        const $ap0: any = () => {
            const array: any = input;
            const tuplePredicators: any = [
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
                        $ao0(top[0], _path + "[0]", false && _exceptionable) &&
                        "object" === typeof top[1] &&
                        null !== top[1] &&
                        $ao1(top[1], _path + "[1]", false && _exceptionable),
                    (entire: any[]): any =>
                        (entire.length === 2 ||
                            $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    "[ArrayRepeatedUnionWithTuple.IBox3D, ArrayRepeatedUnionWithTuple.IPoint3D]",
                                value: entire,
                            })) &&
                        (("object" === typeof entire[0] &&
                            null !== entire[0]) ||
                            $guard(_exceptionable, {
                                path: _path + "[0]",
                                expected: "ArrayRepeatedUnionWithTuple.IBox3D",
                                value: entire[0],
                            })) &&
                        $ao0(
                            entire[0],
                            _path + "[0]",
                            true && _exceptionable,
                        ) &&
                        (("object" === typeof entire[1] &&
                            null !== entire[1]) ||
                            $guard(_exceptionable, {
                                path: _path + "[1]",
                                expected:
                                    "ArrayRepeatedUnionWithTuple.IPoint3D",
                                value: entire[1],
                            })) &&
                        $ao1(entire[1], _path + "[1]", true && _exceptionable),
                ],
            ];
            for (const pred of tuplePredicators)
                if (pred[0](array)) return pred[1](array);
            const top: any = array[0];
            if (0 === input.length) return true;
            const arrayPredicators: any = [
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
                        (("number" === typeof top && Number.isFinite(top)) ||
                            "boolean" === typeof top ||
                            (Array.isArray(top) && $ap0(top))),
                    (entire: any[]): any =>
                        $aa0(entire, _path, true && _exceptionable),
                ],
                [
                    (top: any): any =>
                        "object" === typeof top &&
                        null !== top &&
                        $ao0(top, _path + "[0]", false && _exceptionable),
                    (entire: any[]): any =>
                        entire.every(
                            (elem: any, _index2: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + "[" + _index2 + "]",
                                        expected:
                                            "ArrayRepeatedUnionWithTuple.IBox3D",
                                        value: elem,
                                    })) &&
                                $ao0(
                                    elem,
                                    _path + "[" + _index2 + "]",
                                    true && _exceptionable,
                                ),
                        ),
                ],
            ];
            const passed: any = arrayPredicators.filter((pred: any) =>
                pred[0](top),
            );
            if (1 === passed.length) return passed[0][1](array);
            else if (1 < passed.length)
                for (const pred of passed)
                    if (array.every((value: any) => true === pred[0](value)))
                        return pred[1](array);
            return $guard(true, {
                path: _path,
                expected:
                    "([string, number, boolean] | [IBox3D, IPoint3D] | Array<string> | Array<ArrayRepeatedUnionWithTuple> | Array<ArrayRepeatedUnionWithTuple.IBox3D>)",
                value: input,
            });
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ArrayRepeatedUnionWithTuple => {
                const $ao0: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("object" === typeof input.scale &&
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
                    ) &&
                    (("object" === typeof input.position &&
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
                    ) &&
                    (("object" === typeof input.rotate &&
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
                    ) &&
                    (("object" === typeof input.pivot &&
                        null !== input.pivot) ||
                        $guard(_exceptionable, {
                            path: _path + ".pivot",
                            expected: "ArrayRepeatedUnionWithTuple.IPoint3D",
                            value: input.pivot,
                        })) &&
                    $ao1(input.pivot, _path + ".pivot", true && _exceptionable);
                const $ao1: any = (
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
                const $aa0: any = (
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
                                    $ap0(elem))),
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
                            $ap0(input)))
                );
            })(input, "$input", true);
        return input;
    },
    ArrayRepeatedUnionWithTuple.SPOILERS,
);
