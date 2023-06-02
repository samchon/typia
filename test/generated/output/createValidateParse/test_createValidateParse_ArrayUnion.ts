import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_createValidateParse_ArrayUnion = _test_validateParse(
    "ArrayUnion",
    ArrayUnion.generate,
    (input: string): typia.IValidation<typia.Primitive<ArrayUnion>> => {
        const validate: any = (input: any): typia.IValidation<ArrayUnion> => {
            const __is: any = (input: any): input is ArrayUnion => {
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            Array.isArray(elem) &&
                            (() => {
                                const array: any = elem;
                                const top: any = array[0];
                                if (0 === elem.length) return true;
                                const arrayPredicators: any = [
                                    [
                                        (top: any): any =>
                                            "string" === typeof top,
                                        (entire: any[]): any =>
                                            entire.every(
                                                (elem: any) =>
                                                    "string" === typeof elem,
                                            ),
                                    ],
                                    [
                                        (top: any): any =>
                                            "boolean" === typeof top,
                                        (entire: any[]): any =>
                                            entire.every(
                                                (elem: any) =>
                                                    "boolean" === typeof elem,
                                            ),
                                    ],
                                    [
                                        (top: any): any =>
                                            "number" === typeof top &&
                                            Number.isFinite(top),
                                        (entire: any[]): any =>
                                            entire.every(
                                                (elem: any) =>
                                                    "number" === typeof elem &&
                                                    Number.isFinite(elem),
                                            ),
                                    ],
                                ];
                                const passed: any = arrayPredicators.filter(
                                    (pred: any) => pred[0](top),
                                );
                                if (1 === passed.length)
                                    return passed[0][1](array);
                                else if (1 < passed.length)
                                    for (const pred of passed)
                                        if (
                                            array.every(
                                                (value: any) =>
                                                    true === pred[0](value),
                                            )
                                        )
                                            return pred[1](array);
                                return false;
                            })(),
                    )
                );
            };
            const errors: any = [] as any[];
            const $report: any = (typia.createValidateParse as any).report(
                errors,
            );
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ArrayUnion => {
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ArrayUnion",
                                value: input,
                            })) &&
                            input
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((Array.isArray(elem) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "(Array<boolean> | Array<number> | Array<string>)",
                                                value: elem,
                                            })) &&
                                            (() => {
                                                const array: any = elem;
                                                const top: any = array[0];
                                                if (0 === elem.length)
                                                    return true;
                                                const arrayPredicators: any = [
                                                    [
                                                        (top: any): any =>
                                                            "string" ===
                                                            typeof top,
                                                        (entire: any[]): any =>
                                                            entire
                                                                .map(
                                                                    (
                                                                        elem: any,
                                                                        _index2: number,
                                                                    ) =>
                                                                        "string" ===
                                                                            typeof elem ||
                                                                        $report(
                                                                            true,
                                                                            {
                                                                                path:
                                                                                    _path +
                                                                                    "[" +
                                                                                    _index1 +
                                                                                    "][" +
                                                                                    _index2 +
                                                                                    "]",
                                                                                expected:
                                                                                    "string",
                                                                                value: elem,
                                                                            },
                                                                        ),
                                                                )
                                                                .every(
                                                                    (
                                                                        flag: boolean,
                                                                    ) => flag,
                                                                ),
                                                    ],
                                                    [
                                                        (top: any): any =>
                                                            "boolean" ===
                                                            typeof top,
                                                        (entire: any[]): any =>
                                                            entire
                                                                .map(
                                                                    (
                                                                        elem: any,
                                                                        _index3: number,
                                                                    ) =>
                                                                        "boolean" ===
                                                                            typeof elem ||
                                                                        $report(
                                                                            true,
                                                                            {
                                                                                path:
                                                                                    _path +
                                                                                    "[" +
                                                                                    _index1 +
                                                                                    "][" +
                                                                                    _index3 +
                                                                                    "]",
                                                                                expected:
                                                                                    "boolean",
                                                                                value: elem,
                                                                            },
                                                                        ),
                                                                )
                                                                .every(
                                                                    (
                                                                        flag: boolean,
                                                                    ) => flag,
                                                                ),
                                                    ],
                                                    [
                                                        (top: any): any =>
                                                            "number" ===
                                                                typeof top &&
                                                            Number.isFinite(
                                                                top,
                                                            ),
                                                        (entire: any[]): any =>
                                                            entire
                                                                .map(
                                                                    (
                                                                        elem: any,
                                                                        _index4: number,
                                                                    ) =>
                                                                        ("number" ===
                                                                            typeof elem &&
                                                                            Number.isFinite(
                                                                                elem,
                                                                            )) ||
                                                                        $report(
                                                                            true,
                                                                            {
                                                                                path:
                                                                                    _path +
                                                                                    "[" +
                                                                                    _index1 +
                                                                                    "][" +
                                                                                    _index4 +
                                                                                    "]",
                                                                                expected:
                                                                                    "number",
                                                                                value: elem,
                                                                            },
                                                                        ),
                                                                )
                                                                .every(
                                                                    (
                                                                        flag: boolean,
                                                                    ) => flag,
                                                                ),
                                                    ],
                                                ];
                                                const passed: any =
                                                    arrayPredicators.filter(
                                                        (pred: any) =>
                                                            pred[0](top),
                                                    );
                                                if (1 === passed.length)
                                                    return passed[0][1](array);
                                                else if (1 < passed.length)
                                                    for (const pred of passed)
                                                        if (
                                                            array.every(
                                                                (value: any) =>
                                                                    true ===
                                                                    pred[0](
                                                                        value,
                                                                    ),
                                                            )
                                                        )
                                                            return pred[1](
                                                                array,
                                                            );
                                                return $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "(Array<string> | Array<boolean> | Array<number>)",
                                                    value: elem,
                                                });
                                            })()) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Array<boolean> | Array<number> | Array<string>)",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "ArrayUnion",
                            value: input,
                        })
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
    },
    ArrayUnion.SPOILERS,
);
