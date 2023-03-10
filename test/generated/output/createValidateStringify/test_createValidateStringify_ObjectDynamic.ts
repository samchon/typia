import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_createValidateStringify_ObjectDynamic =
    _test_validateStringify(
        "ObjectDynamic",
        ObjectDynamic.generate,
        (input: ObjectDynamic): typia.IValidation<string> => {
            const validate = (input: any): typia.IValidation<ObjectDynamic> => {
                const errors = [] as any[];
                const $report = (typia.createValidateStringify as any).report(
                    errors,
                );
                const $join = (typia.createValidateStringify as any).join;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectDynamic => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            false === _exceptionable ||
                                Object.keys(input)
                                    .map((key) => {
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        if (RegExp(/(.*)/).test(key))
                                            return (
                                                "string" === typeof value ||
                                                ("number" === typeof value &&
                                                    Number.isFinite(value)) ||
                                                "boolean" === typeof value ||
                                                $report(_exceptionable, {
                                                    path: _path + $join(key),
                                                    expected:
                                                        "(boolean | number | string)",
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
                                expected: "ObjectDynamic",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "ObjectDynamic",
                            value: input,
                        })
                    );
                })(input, "$input", true);
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const stringify = (input: ObjectDynamic): string => {
                const $join = (typia.createValidateStringify as any).join;
                const $string = (typia.createValidateStringify as any).string;
                const $number = (typia.createValidateStringify as any).number;
                const $throws = (typia.createValidateStringify as any).throws;
                const $so0 = (input: any): any =>
                    `{${Object.entries(input)
                        .map(([key, value]: [string, any]) => {
                            if (undefined === value) return "";
                            return `${JSON.stringify(key)}:${(() => {
                                if ("string" === typeof value)
                                    return $string(value);
                                if ("number" === typeof value)
                                    return $number(value);
                                if ("boolean" === typeof value) return value;
                                $throws({
                                    expected: "(boolean | number | string)",
                                    value: value,
                                });
                            })()}`;
                        })
                        .filter((str) => "" !== str)
                        .join(",")}}`;
                return $so0(input);
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        },
        ObjectDynamic.SPOILERS,
    );
