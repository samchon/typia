import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";

export const test_validateParse_ArrayRepeatedUnion = _test_validateParse(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    (input) =>
        ((
            input: string,
        ): typia.IValidation<typia.Primitive<ArrayRepeatedUnion>> => {
            const validate: any = (
                input: any,
            ): typia.IValidation<ArrayRepeatedUnion> => {
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
                        const passed: any = arrayPredicators.filter(
                            (pred: any) => pred[0](top),
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
                        (("number" === typeof input &&
                            Number.isFinite(input)) ||
                            "boolean" === typeof input ||
                            (Array.isArray(input) && $ip0(input)))
                    );
                };
                const errors: any = [] as any[];
                const $report: any = (typia.validateParse as any).report(
                    errors,
                );
                const $vp0: any = () => {
                    const array: any = input;
                    const top: any = array[0];
                    if (0 === input.length) return true;
                    const arrayPredicators: any = [
                        [
                            (top: any): any => "string" === typeof top,
                            (entire: any[]): any =>
                                entire
                                    .map(
                                        (elem: any, _index1: number) =>
                                            "string" === typeof elem ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected: "string",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag),
                        ],
                        [
                            (top: any): any =>
                                null !== top &&
                                undefined !== top &&
                                (("number" === typeof top &&
                                    Number.isFinite(top)) ||
                                    "boolean" === typeof top ||
                                    (Array.isArray(top) && $vp0(top))),
                            (entire: any[]): any =>
                                $va0(entire, _path, true && _exceptionable),
                        ],
                        [
                            (top: any): any =>
                                "object" === typeof top &&
                                null !== top &&
                                $vo0(
                                    top,
                                    _path + "[0]",
                                    false && _exceptionable,
                                ),
                            (entire: any[]): any =>
                                entire
                                    .map(
                                        (elem: any, _index2: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index2 +
                                                        "]",
                                                    expected:
                                                        "ObjectSimple.IBox3D",
                                                    value: elem,
                                                })) &&
                                                $vo0(
                                                    elem,
                                                    _path + "[" + _index2 + "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path + "[" + _index2 + "]",
                                                expected: "ObjectSimple.IBox3D",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag),
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
                    return $report(_exceptionable, {
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
                        const $vo0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((("object" === typeof input.scale &&
                                    null !== input.scale) ||
                                    $report(_exceptionable, {
                                        path: _path + ".scale",
                                        expected: "ObjectSimple.IPoint3D",
                                        value: input.scale,
                                    })) &&
                                    $vo1(
                                        input.scale,
                                        _path + ".scale",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".scale",
                                        expected: "ObjectSimple.IPoint3D",
                                        value: input.scale,
                                    }),
                                ((("object" === typeof input.position &&
                                    null !== input.position) ||
                                    $report(_exceptionable, {
                                        path: _path + ".position",
                                        expected: "ObjectSimple.IPoint3D",
                                        value: input.position,
                                    })) &&
                                    $vo1(
                                        input.position,
                                        _path + ".position",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".position",
                                        expected: "ObjectSimple.IPoint3D",
                                        value: input.position,
                                    }),
                                ((("object" === typeof input.rotate &&
                                    null !== input.rotate) ||
                                    $report(_exceptionable, {
                                        path: _path + ".rotate",
                                        expected: "ObjectSimple.IPoint3D",
                                        value: input.rotate,
                                    })) &&
                                    $vo1(
                                        input.rotate,
                                        _path + ".rotate",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".rotate",
                                        expected: "ObjectSimple.IPoint3D",
                                        value: input.rotate,
                                    }),
                                ((("object" === typeof input.pivot &&
                                    null !== input.pivot) ||
                                    $report(_exceptionable, {
                                        path: _path + ".pivot",
                                        expected: "ObjectSimple.IPoint3D",
                                        value: input.pivot,
                                    })) &&
                                    $vo1(
                                        input.pivot,
                                        _path + ".pivot",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".pivot",
                                        expected: "ObjectSimple.IPoint3D",
                                        value: input.pivot,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo1: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("number" === typeof input.x &&
                                    Number.isFinite(input.x)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".x",
                                        expected: "number",
                                        value: input.x,
                                    }),
                                ("number" === typeof input.y &&
                                    Number.isFinite(input.y)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".y",
                                        expected: "number",
                                        value: input.y,
                                    }),
                                ("number" === typeof input.z &&
                                    Number.isFinite(input.z)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".z",
                                        expected: "number",
                                        value: input.z,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $va0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            input
                                .map(
                                    (elem: any, _index3: number) =>
                                        (null !== elem ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path + "[" + _index3 + "]",
                                                expected:
                                                    "(Array<ArrayRepeatedUnion> | Array<ObjectSimple.IBox3D> | Array<string> | boolean | number)",
                                                value: elem,
                                            })) &&
                                        (undefined !== elem ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path + "[" + _index3 + "]",
                                                expected:
                                                    "(Array<ArrayRepeatedUnion> | Array<ObjectSimple.IBox3D> | Array<string> | boolean | number)",
                                                value: elem,
                                            })) &&
                                        (("number" === typeof elem &&
                                            Number.isFinite(elem)) ||
                                            "boolean" === typeof elem ||
                                            ((Array.isArray(elem) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index3 +
                                                        "]",
                                                    expected:
                                                        "(Array<ArrayRepeatedUnion> | Array<ObjectSimple.IBox3D> | Array<string> | boolean | number)",
                                                    value: elem,
                                                })) &&
                                                $vp0(elem)) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path + "[" + _index3 + "]",
                                                expected:
                                                    "(Array<ArrayRepeatedUnion> | Array<ObjectSimple.IBox3D> | Array<string> | boolean | number)",
                                                value: elem,
                                            })),
                                )
                                .every((flag: boolean) => flag);
                        return (
                            (null !== input ||
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        "(Array<ArrayRepeatedUnion> | Array<ObjectSimple.IBox3D> | Array<string> | boolean | number)",
                                    value: input,
                                })) &&
                            (undefined !== input ||
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        "(Array<ArrayRepeatedUnion> | Array<ObjectSimple.IBox3D> | Array<string> | boolean | number)",
                                    value: input,
                                })) &&
                            (("number" === typeof input &&
                                Number.isFinite(input)) ||
                                "boolean" === typeof input ||
                                ((Array.isArray(input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected:
                                            "(Array<ArrayRepeatedUnion> | Array<ObjectSimple.IBox3D> | Array<string> | boolean | number)",
                                        value: input,
                                    })) &&
                                    $vp0(input)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        "(Array<ArrayRepeatedUnion> | Array<ObjectSimple.IBox3D> | Array<string> | boolean | number)",
                                    value: input,
                                }))
                        );
                    })(input, "$input", true);
                const success: any = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            input = JSON.parse(input);
            const output: any = validate(input);
            return output as any;
        })(input),
    ArrayRepeatedUnion.SPOILERS,
);
