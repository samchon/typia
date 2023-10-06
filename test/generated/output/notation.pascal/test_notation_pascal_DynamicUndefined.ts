import typia from "../../../../src";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_notation_validatePascal_DynamicUndefined =
    _test_notation_validateGeneral("DynamicUndefined")<DynamicUndefined>(
        DynamicUndefined,
    )<typia.PascalCase<DynamicUndefined>>({
        convert: (input) =>
            ((
                input: any,
            ): typia.IValidation<typia.PascalCase<DynamicUndefined>> => {
                const validate = (
                    input: any,
                ): typia.IValidation<DynamicUndefined> => {
                    const errors = [] as any[];
                    const __is = (input: any): input is DynamicUndefined => {
                        const $io0 = (input: any): boolean =>
                            Object.keys(input).every((key: any) => {
                                const value = input[key];
                                if (undefined === value) return true;
                                if (RegExp(/(.*)/).test(key))
                                    return (
                                        null !== value && undefined === value
                                    );
                                return true;
                            });
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            false === Array.isArray(input) &&
                            $io0(input)
                        );
                    };
                    if (false === __is(input)) {
                        const $report = (
                            typia.notations.validatePascal as any
                        ).report(errors);
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is DynamicUndefined => {
                            const $join = (
                                typia.notations.validatePascal as any
                            ).join;
                            const $vo0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    false === _exceptionable ||
                                        Object.keys(input)
                                            .map((key: any) => {
                                                const value = input[key];
                                                if (undefined === value)
                                                    return true;
                                                if (RegExp(/(.*)/).test(key))
                                                    return (
                                                        (null !== value ||
                                                            $report(
                                                                _exceptionable,
                                                                {
                                                                    path:
                                                                        _path +
                                                                        $join(
                                                                            key,
                                                                        ),
                                                                    expected:
                                                                        "undefined",
                                                                    value: value,
                                                                },
                                                            )) &&
                                                        (undefined === value ||
                                                            $report(
                                                                _exceptionable,
                                                                {
                                                                    path:
                                                                        _path +
                                                                        $join(
                                                                            key,
                                                                        ),
                                                                    expected:
                                                                        "undefined",
                                                                    value: value,
                                                                },
                                                            ))
                                                    );
                                                return true;
                                            })
                                            .every((flag: boolean) => flag),
                                ].every((flag: boolean) => flag);
                            return (
                                ((("object" === typeof input &&
                                    null !== input &&
                                    false === Array.isArray(input)) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "DynamicUndefined",
                                        value: input,
                                    })) &&
                                    $vo0(input, _path + "", true)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "DynamicUndefined",
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
                };
                const general = (
                    input: DynamicUndefined,
                ): typia.PascalCase<DynamicUndefined> => {
                    const $co0 = (input: any): any => {
                        const output = {} as any;
                        for (const [key, value] of Object.entries(input)) {
                            if (RegExp(/(.*)/).test(key)) {
                                output[key] = value as any;
                                continue;
                            }
                        }
                        return output;
                    };
                    return "object" === typeof input && null !== input
                        ? $co0(input)
                        : (input as any);
                };
                const output = validate(input) as any;
                if (output.success) output.data = general(input);
                return output;
            })(input),
        assert: (input: any): typia.PascalCase<DynamicUndefined> => {
            const __is = (
                input: any,
            ): input is typia.PascalCase<DynamicUndefined> => {
                const $io0 = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return null !== value && undefined === value;
                        return true;
                    });
                return (
                    "object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input) &&
                    $io0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is typia.PascalCase<DynamicUndefined> => {
                    const $guard = (typia.createAssert as any).guard;
                    const $join = (typia.createAssert as any).join;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            const value = input[key];
                            if (undefined === value) return true;
                            if (RegExp(/(.*)/).test(key))
                                return (
                                    (null !== value ||
                                        $guard(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "undefined",
                                            value: value,
                                        })) &&
                                    (undefined === value ||
                                        $guard(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "undefined",
                                            value: value,
                                        }))
                                );
                            return true;
                        });
                    return (
                        ((("object" === typeof input &&
                            null !== input &&
                            false === Array.isArray(input)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "DynamicUndefined",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "DynamicUndefined",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        },
    });
