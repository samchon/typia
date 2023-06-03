import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { FunctionalArrayUnion } from "../../../structures/FunctionalArrayUnion";

export const test_createAssert_FunctionalArrayUnion = _test_assert(
    "FunctionalArrayUnion",
    FunctionalArrayUnion.generate,
    (input: any): FunctionalArrayUnion => {
        const __is = (input: any): input is FunctionalArrayUnion => {
            const $ip0 = (input: any) => {
                const array = input;
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
                            "number" === typeof top && Number.isFinite(top),
                        (entire: any[]): any =>
                            entire.every(
                                (elem: any) =>
                                    "number" === typeof elem &&
                                    Number.isFinite(elem),
                            ),
                    ],
                    [
                        (top: any): any => "function" === typeof top,
                        (entire: any[]): any =>
                            entire.every(
                                (elem: any) => "function" === typeof elem,
                            ),
                    ],
                    [
                        (top: any): any => undefined !== top && null === top,
                        (entire: any[]): any =>
                            entire.every(
                                (elem: any) =>
                                    undefined !== elem && null === elem,
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
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) => Array.isArray(elem) && ($ip0(elem) || false),
                )
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is FunctionalArrayUnion => {
                const $guard = (typia.createAssert as any).guard;
                const $ap0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ) => {
                    const array = input;
                    const top = input[0];
                    if (0 === input.length) return true;
                    const arrayPredicators = [
                        [
                            (top: any): any => "string" === typeof top,
                            (entire: any[]): any =>
                                entire.every(
                                    (elem: any, _index6: number) =>
                                        "string" === typeof elem ||
                                        $guard(_exceptionable, {
                                            path: _path + "[" + _index6 + "]",
                                            expected: "string",
                                            value: elem,
                                        }),
                                ),
                        ],
                        [
                            (top: any): any =>
                                "number" === typeof top && Number.isFinite(top),
                            (entire: any[]): any =>
                                entire.every(
                                    (elem: any, _index7: number) =>
                                        ("number" === typeof elem &&
                                            Number.isFinite(elem)) ||
                                        $guard(_exceptionable, {
                                            path: _path + "[" + _index7 + "]",
                                            expected: "number",
                                            value: elem,
                                        }),
                                ),
                        ],
                        [
                            (top: any): any => "function" === typeof top,
                            (entire: any[]): any =>
                                entire.every(
                                    (elem: any, _index8: number) =>
                                        "function" === typeof elem ||
                                        $guard(_exceptionable, {
                                            path: _path + "[" + _index8 + "]",
                                            expected: "unknown",
                                            value: elem,
                                        }),
                                ),
                        ],
                        [
                            (top: any): any =>
                                undefined !== top && null === top,
                            (entire: any[]): any =>
                                entire.every(
                                    (elem: any, _index9: number) =>
                                        (undefined !== elem ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path + "[" + _index9 + "]",
                                                expected: "null",
                                                value: elem,
                                            })) &&
                                        (null === elem ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path + "[" + _index9 + "]",
                                                expected: "null",
                                                value: elem,
                                            })),
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
                            "(Array<string> | Array<number> | Array<__type> | Array<null>)",
                        value: input,
                    });
                };
                return (
                    ((Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "FunctionalArrayUnion",
                            value: input,
                        })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                ((Array.isArray(elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Array<__type> | Array<null> | Array<number> | Array<string>)",
                                        value: elem,
                                    })) &&
                                    ($ap0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true && _exceptionable,
                                    ) ||
                                        $guard(_exceptionable, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "Array<string> | Array<number> | Array<__type> | Array<null>",
                                            value: elem,
                                        }))) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(Array<__type> | Array<null> | Array<number> | Array<string>)",
                                    value: elem,
                                }),
                        )) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "FunctionalArrayUnion",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
    FunctionalArrayUnion.SPOILERS,
);
