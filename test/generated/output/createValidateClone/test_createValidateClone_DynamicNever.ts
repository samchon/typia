import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_createValidateClone_DynamicNever = _test_validateClone(
    "DynamicNever",
    DynamicNever.generate,
    (input: any): typia.IValidation<typia.Primitive<DynamicNever>> => {
        const validate: any = (input: any): typia.IValidation<DynamicNever> => {
            const __is: any = (input: any): input is DynamicNever => {
                const $join: any = (typia.createValidateClone as any).join;
                const $io0: any = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value: any = input[key];
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
                ): input is DynamicNever => {
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
                                        if (RegExp(/(.*)/).test(key))
                                            return (
                                                (null !== value ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected: "undefined",
                                                        value: value,
                                                    })) &&
                                                (undefined === value ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected: "undefined",
                                                        value: value,
                                                    }))
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
                                expected: "DynamicNever",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "DynamicNever",
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
            input: DynamicNever,
        ): typia.Primitive<DynamicNever> => {
            const $join: any = (typia.createValidateClone as any).join;
            const $co0: any = (input: any): any => {
                const output: any = {} as any;
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
        const output: any = validate(input) as any;
        if (output.success) output.data = clone(input);
        return output;
    },
    DynamicNever.SPOILERS,
);
