import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";

export const test_createAssertClone_ArrayRepeatedUnion = _test_assertClone(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    (input: any): typia.Primitive<ArrayRepeatedUnion> => {
        const assert: any = (input: any): ArrayRepeatedUnion => {
            const __is: any = (input: any): input is ArrayRepeatedUnion => {
                const $ip0: any = () => {
                    const array: any = input;
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
                                array.every(
                                    (value: any) => true === pred[0](value),
                                )
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
                const $ia0: any = (input: any): any =>
                    input.every(
                        (elem: any) =>
                            null !== elem &&
                            undefined !== elem &&
                            (("number" === typeof elem &&
                                Number.isFinite(elem)) ||
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
            const $guard: any = (typia.createAssertClone as any).guard;
            const $ap0: any = () => {
                const array: any = input;
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
                            (("number" === typeof top &&
                                Number.isFinite(top)) ||
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
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path: _path + "[" + _index2 + "]",
                                            expected: "ObjectSimple.IBox3D",
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
                        if (
                            array.every((value: any) => true === pred[0](value))
                        )
                            return pred[1](array);
                return $guard(_exceptionable, {
                    path: _path,
                    expected:
                        "(Array<string> | Array<ArrayRepeatedUnion> | Array<ObjectSimple.IBox3D>)",
                    value: input,
                });
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ArrayRepeatedUnion => {
                    const $ao0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.scale &&
                            null !== input.scale) ||
                            $guard(_exceptionable, {
                                path: _path + ".scale",
                                expected: "ObjectSimple.IPoint3D",
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
                                expected: "ObjectSimple.IPoint3D",
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
                                expected: "ObjectSimple.IPoint3D",
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
                                expected: "ObjectSimple.IPoint3D",
                                value: input.pivot,
                            })) &&
                        $ao1(
                            input.pivot,
                            _path + ".pivot",
                            true && _exceptionable,
                        );
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
                                            "(Array<ArrayRepeatedUnion> | Array<ObjectSimple.IBox3D> | Array<string> | boolean | number)",
                                        value: elem,
                                    })) &&
                                (undefined !== elem ||
                                    $guard(_exceptionable, {
                                        path: _path + "[" + _index3 + "]",
                                        expected:
                                            "(Array<ArrayRepeatedUnion> | Array<ObjectSimple.IBox3D> | Array<string> | boolean | number)",
                                        value: elem,
                                    })) &&
                                (("number" === typeof elem &&
                                    Number.isFinite(elem)) ||
                                    "boolean" === typeof elem ||
                                    ((Array.isArray(elem) ||
                                        $guard(_exceptionable, {
                                            path: _path + "[" + _index3 + "]",
                                            expected:
                                                "(Array<ArrayRepeatedUnion> | Array<ObjectSimple.IBox3D> | Array<string> | boolean | number)",
                                            value: elem,
                                        })) &&
                                        $ap0(elem))),
                        );
                    return (
                        (null !== input ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "(Array<ArrayRepeatedUnion> | Array<ObjectSimple.IBox3D> | Array<string> | boolean | number)",
                                value: input,
                            })) &&
                        (undefined !== input ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "(Array<ArrayRepeatedUnion> | Array<ObjectSimple.IBox3D> | Array<string> | boolean | number)",
                                value: input,
                            })) &&
                        (("number" === typeof input &&
                            Number.isFinite(input)) ||
                            "boolean" === typeof input ||
                            ((Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected:
                                        "(Array<ArrayRepeatedUnion> | Array<ObjectSimple.IBox3D> | Array<string> | boolean | number)",
                                    value: input,
                                })) &&
                                $ap0(input)))
                    );
                })(input, "$input", true);
            return input;
        };
        const clone: any = (
            input: ArrayRepeatedUnion,
        ): typia.Primitive<ArrayRepeatedUnion> => {
            const $io0: any = (input: any): boolean =>
                "object" === typeof input.scale &&
                null !== input.scale &&
                $io1(input.scale) &&
                "object" === typeof input.position &&
                null !== input.position &&
                $io1(input.position) &&
                "object" === typeof input.rotate &&
                null !== input.rotate &&
                $io1(input.rotate) &&
                "object" === typeof input.pivot &&
                null !== input.pivot &&
                $io1(input.pivot);
            const $io1: any = (input: any): boolean =>
                "number" === typeof input.x &&
                "number" === typeof input.y &&
                "number" === typeof input.z;
            const $throws: any = (typia.createAssertClone as any).throws;
            const $cp0: any = () => {
                const array: any = input;
                const top: any = array[0];
                if (0 === input.length) return true;
                const arrayPredicators: any = [
                    [
                        (top: any): any => "string" === typeof top,
                        (entire: any[]): any =>
                            entire.map((elem: any) => elem as any),
                    ],
                    [
                        (top: any): any =>
                            null !== top &&
                            undefined !== top &&
                            ("number" === typeof top ||
                                "boolean" === typeof top ||
                                (Array.isArray(top) && $cp0(top))),
                        (entire: any[]): any => $ca0(entire),
                    ],
                    [
                        (top: any): any =>
                            "object" === typeof top &&
                            null !== top &&
                            $io0(top),
                        (entire: any[]): any =>
                            entire.map((elem: any) =>
                                "object" === typeof elem && null !== elem
                                    ? $co0(elem)
                                    : (elem as any),
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
                $throws({
                    expected:
                        "(Array<string> | Array<ArrayRepeatedUnion> | Array<ObjectSimple.IBox3D>)",
                    value: input,
                });
            };
            const $co0: any = (input: any): any => ({
                scale:
                    "object" === typeof input.scale && null !== input.scale
                        ? $co1(input.scale)
                        : (input.scale as any),
                position:
                    "object" === typeof input.position &&
                    null !== input.position
                        ? $co1(input.position)
                        : (input.position as any),
                rotate:
                    "object" === typeof input.rotate && null !== input.rotate
                        ? $co1(input.rotate)
                        : (input.rotate as any),
                pivot:
                    "object" === typeof input.pivot && null !== input.pivot
                        ? $co1(input.pivot)
                        : (input.pivot as any),
            });
            const $co1: any = (input: any): any => ({
                x: input.x as any,
                y: input.y as any,
                z: input.z as any,
            });
            const $ca0: any = (input: any): any =>
                input.map((elem: any) =>
                    Array.isArray(elem) ? $cp0(elem) : (elem as any),
                );
            return Array.isArray(input) ? $cp0(input) : (input as any);
        };
        assert(input);
        const output: any = clone(input);
        return output;
    },
    ArrayRepeatedUnion.SPOILERS,
);
