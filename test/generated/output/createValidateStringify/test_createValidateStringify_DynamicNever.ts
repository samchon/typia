import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_createValidateStringify_DynamicNever =
    _test_validateStringify(
        "DynamicNever",
        DynamicNever.generate,
        (input: DynamicNever): typia.IValidation<string> => {
            const validate: any = (
                input: any,
            ): typia.IValidation<DynamicNever> => {
                const __is: any = (input: any): input is DynamicNever => {
                    const $join: any = (typia.createValidateStringify as any)
                        .join;
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
                const $report: any = (
                    typia.createValidateStringify as any
                ).report(errors);
                const $join: any = (typia.createValidateStringify as any).join;
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
                                                                    $join(key),
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
                                                                    $join(key),
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
            const stringify: any = (input: DynamicNever): string => {
                const $join: any = (typia.createValidateStringify as any).join;
                const $so0: any = (input: any): any =>
                    `{${Object.entries(input)
                        .map(([key, value]: [string, any]) => {
                            if (undefined === value) return "";
                            return `${JSON.stringify(key)}:${undefined}`;
                        })
                        .filter((str: any) => "" !== str)
                        .join(",")}}`;
                return $so0(input);
            };
            const output: any = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        },
        DynamicNever.SPOILERS,
    );
