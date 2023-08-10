import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_validate_ArrayUnion = _test_validate<ArrayUnion>(ArrayUnion)(
    (input: any): typia.IValidation<ArrayUnion> => {
        const errors = [] as any[];
        const __is = (input: any): input is ArrayUnion => {
            const $ip0 = (input: any) => {
                const array = input;
                const top = input[0];
                if (0 === input.length) return true;
                const arrayPredicators = [
                    [
                        (top: any): any => "boolean" === typeof top,
                        (entire: any[]): any =>
                            entire.every(
                                (elem: any) => "boolean" === typeof elem,
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
                        (top: any): any => "string" === typeof top,
                        (entire: any[]): any =>
                            entire.every(
                                (elem: any) => "string" === typeof elem,
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
        if (false === __is(input)) {
            const $report = (typia.createValidate as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ArrayUnion => {
                const $vp0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ) => {
                    const array = input;
                    const top = input[0];
                    if (0 === input.length) return true;
                    const arrayPredicators = [
                        [
                            (top: any): any => "boolean" === typeof top,
                            (entire: any[]): any =>
                                entire
                                    .map(
                                        (elem: any, _index5: number) =>
                                            "boolean" === typeof elem ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path + "[" + _index5 + "]",
                                                expected: "boolean",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag),
                        ],
                        [
                            (top: any): any =>
                                "number" === typeof top && Number.isFinite(top),
                            (entire: any[]): any =>
                                entire
                                    .map(
                                        (elem: any, _index6: number) =>
                                            ("number" === typeof elem &&
                                                Number.isFinite(elem)) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path + "[" + _index6 + "]",
                                                expected: "number",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag),
                        ],
                        [
                            (top: any): any => "string" === typeof top,
                            (entire: any[]): any =>
                                entire
                                    .map(
                                        (elem: any, _index7: number) =>
                                            "string" === typeof elem ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path + "[" + _index7 + "]",
                                                expected: "string",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag),
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
                    return $report(_exceptionable, {
                        path: _path,
                        expected:
                            "(Array<boolean> | Array<number> | Array<string>)",
                        value: input,
                    });
                };
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
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Array<boolean> | Array<number> | Array<string>)",
                                            value: elem,
                                        })) &&
                                        ($vp0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true && _exceptionable,
                                        ) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "Array<boolean> | Array<number> | Array<string>",
                                                value: elem,
                                            }))) ||
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
        }
        const success = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as any;
    },
);
