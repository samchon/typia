import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_validateStringify_ObjectGenericAlias =
    _test_validateStringify(
        "ObjectGenericAlias",
        ObjectGenericAlias.generate,
        (input) =>
            ((
                input: ObjectGenericAlias.ISomething<string>,
            ): typia.IValidation<string> => {
                const validate = (
                    input: any,
                ): typia.IValidation<ObjectGenericAlias.ISomething<string>> => {
                    const __is = (
                        input: any,
                    ): input is ObjectGenericAlias.ISomething<string> => {
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            "string" === typeof input.value
                        );
                    };
                    const errors = [] as any[];
                    const $report = (typia.validateStringify as any).report(
                        errors,
                    );
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is ObjectGenericAlias.ISomething<string> => {
                            const $vo0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    "string" === typeof input.value ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected: "string",
                                            value: input.value,
                                        }),
                                ].every((flag: boolean) => flag);
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected:
                                            "Resolve<ObjectGenericAlias.Alias>",
                                        value: input,
                                    })) &&
                                    $vo0(input, _path + "", true)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        "Resolve<ObjectGenericAlias.Alias>",
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
                const stringify = (
                    input: ObjectGenericAlias.ISomething<string>,
                ): string => {
                    const $string = (typia.validateStringify as any).string;
                    return `{"value":${$string(input.value)}}`;
                };
                const output = validate(input) as any;
                if (output.success) output.data = stringify(input);
                return output;
            })(input),
        ObjectGenericAlias.SPOILERS,
    );
