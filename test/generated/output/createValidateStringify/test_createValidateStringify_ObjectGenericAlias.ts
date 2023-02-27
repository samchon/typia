import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_createValidateStringify_ObjectGenericAlias =
    _test_validateStringify(
        "ObjectGenericAlias",
        ObjectGenericAlias.generate,
        (input: ObjectGenericAlias): typia.IValidation<string> => {
            const validate = (
                input: any,
            ): typia.IValidation<ObjectGenericAlias> => {
                const errors = [] as any[];
                const $report = (typia.createValidateStringify as any).report(
                    errors,
                );
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectGenericAlias => {
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
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "Resolve<ObjectGenericAlias.Alias>",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Resolve<ObjectGenericAlias.Alias>",
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
            const stringify = (input: ObjectGenericAlias): string => {
                const $string = (typia.createValidateStringify as any).string;
                return `{"value":${$string(input.value)}}`;
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        },
        ObjectGenericAlias.SPOILERS,
    );
