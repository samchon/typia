import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_createValidateClone_DynamicUnion = _test_validateClone(
    "DynamicUnion",
    DynamicUnion.generate,
    (input: any): typia.IValidation<typia.Primitive<DynamicUnion>> => {
        const validate: any = (input: any): typia.IValidation<DynamicUnion> => {
            const __is: any = (input: any): input is DynamicUnion => {
                const $join: any = (typia.createValidateClone as any).join;
                const $io0: any = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value: any = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/^-?\d+\.?\d*$/).test(key))
                            return "string" === typeof value;
                        if (RegExp(/^(prefix_(.*))/).test(key))
                            return "string" === typeof value;
                        if (RegExp(/((.*)_postfix)$/).test(key))
                            return "string" === typeof value;
                        if (
                            RegExp(
                                /^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/,
                            ).test(key)
                        )
                            return (
                                "number" === typeof value &&
                                Number.isFinite(value)
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
            const errors: any = [] as any[];
            const $report: any = (typia.createValidateClone as any).report(
                errors,
            );
            const $join: any = (typia.createValidateClone as any).join;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is DynamicUnion => {
                    const $vo0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            false === _exceptionable ||
                                Object.keys(input)
                                    .map((key: any) => {
                                        const value: any = input[key];
                                        if (undefined === value) return true;
                                        if (RegExp(/^-?\d+\.?\d*$/).test(key))
                                            return (
                                                "string" === typeof value ||
                                                $report(_exceptionable, {
                                                    path: _path + $join(key),
                                                    expected: "string",
                                                    value: value,
                                                })
                                            );
                                        if (RegExp(/^(prefix_(.*))/).test(key))
                                            return (
                                                "string" === typeof value ||
                                                $report(_exceptionable, {
                                                    path: _path + $join(key),
                                                    expected: "string",
                                                    value: value,
                                                })
                                            );
                                        if (RegExp(/((.*)_postfix)$/).test(key))
                                            return (
                                                "string" === typeof value ||
                                                $report(_exceptionable, {
                                                    path: _path + $join(key),
                                                    expected: "string",
                                                    value: value,
                                                })
                                            );
                                        if (
                                            RegExp(
                                                /^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/,
                                            ).test(key)
                                        )
                                            return (
                                                ("number" === typeof value &&
                                                    Number.isFinite(value)) ||
                                                $report(_exceptionable, {
                                                    path: _path + $join(key),
                                                    expected: "number",
                                                    value: value,
                                                })
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
                                expected: "DynamicUnion",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "DynamicUnion",
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
        const clone: any = (
            input: DynamicUnion,
        ): typia.Primitive<DynamicUnion> => {
            const $join: any = (typia.createValidateClone as any).join;
            const $co0: any = (input: any): any => {
                const output: any = {} as any;
                for (const [key, value] of Object.entries(input)) {
                    if (RegExp(/^-?\d+\.?\d*$/).test(key)) {
                        output[key] = value as any;
                        continue;
                    }
                    if (RegExp(/^(prefix_(.*))/).test(key)) {
                        output[key] = value as any;
                        continue;
                    }
                    if (RegExp(/((.*)_postfix)$/).test(key)) {
                        output[key] = value as any;
                        continue;
                    }
                    if (
                        RegExp(
                            /^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/,
                        ).test(key)
                    ) {
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
        const output: any = validate(input) as any;
        if (output.success) output.data = clone(input);
        return output;
    },
    DynamicUnion.SPOILERS,
);
