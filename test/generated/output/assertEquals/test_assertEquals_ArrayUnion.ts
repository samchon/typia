import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_assertEquals_ArrayUnion = _test_assertEquals(
    "ArrayUnion",
)<ArrayUnion>(ArrayUnion)((input) =>
    ((input: any): ArrayUnion => {
        const __is = (
            input: any,
            _exceptionable: boolean = true,
        ): input is ArrayUnion => {
            const $ip0 = (input: any, _exceptionable: boolean = true) => {
                const array = input;
                const top = input[0];
                if (0 === input.length) return true;
                const arrayPredicators = [
                    [
                        (top: any[]): any => "boolean" === typeof top,
                        (entire: any[]): any =>
                            entire.every(
                                (elem: any, _index5: number) =>
                                    "boolean" === typeof elem,
                            ),
                    ] as const,
                    [
                        (top: any[]): any =>
                            "number" === typeof top && Number.isFinite(top),
                        (entire: any[]): any =>
                            entire.every(
                                (elem: any, _index6: number) =>
                                    "number" === typeof elem &&
                                    Number.isFinite(elem),
                            ),
                    ] as const,
                    [
                        (top: any[]): any => "string" === typeof top,
                        (entire: any[]): any =>
                            entire.every(
                                (elem: any, _index7: number) =>
                                    "string" === typeof elem,
                            ),
                    ] as const,
                ];
                const passed = arrayPredicators.filter((pred: any) =>
                    pred[0](top),
                );
                if (1 === passed.length) return passed[0]![1](array);
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
                    (elem: any, _index1: number) =>
                        Array.isArray(elem) &&
                        ($ip0(elem, true && _exceptionable) || false),
                )
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ArrayUnion => {
                const $guard = (typia.assertEquals as any).guard;
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
                            (top: any[]): any => "boolean" === typeof top,
                            (entire: any[]): any =>
                                entire.every(
                                    (elem: any, _index5: number) =>
                                        "boolean" === typeof elem ||
                                        $guard(_exceptionable, {
                                            path: _path + "[" + _index5 + "]",
                                            expected: "boolean",
                                            value: elem,
                                        }),
                                ),
                        ] as const,
                        [
                            (top: any[]): any =>
                                "number" === typeof top && Number.isFinite(top),
                            (entire: any[]): any =>
                                entire.every(
                                    (elem: any, _index6: number) =>
                                        ("number" === typeof elem &&
                                            Number.isFinite(elem)) ||
                                        $guard(_exceptionable, {
                                            path: _path + "[" + _index6 + "]",
                                            expected: "number",
                                            value: elem,
                                        }),
                                ),
                        ] as const,
                        [
                            (top: any[]): any => "string" === typeof top,
                            (entire: any[]): any =>
                                entire.every(
                                    (elem: any, _index7: number) =>
                                        "string" === typeof elem ||
                                        $guard(_exceptionable, {
                                            path: _path + "[" + _index7 + "]",
                                            expected: "string",
                                            value: elem,
                                        }),
                                ),
                        ] as const,
                    ];
                    const passed = arrayPredicators.filter((pred: any) =>
                        pred[0](top),
                    );
                    if (1 === passed.length) return passed[0]![1](array);
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
                            "(Array<boolean> | Array<number> | Array<string>)",
                        value: input,
                    });
                };
                return (
                    ((Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ArrayUnion",
                            value: input,
                        })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                ((Array.isArray(elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Array<boolean> | Array<number> | Array<string>)",
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
                                                "Array<boolean> | Array<number> | Array<string>",
                                            value: elem,
                                        }))) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(Array<boolean> | Array<number> | Array<string>)",
                                    value: elem,
                                }),
                        )) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ArrayUnion",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    })(input),
);
