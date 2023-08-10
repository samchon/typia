import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_validate_ObjectGenericAlias =
    _test_validate<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
        ((input: any): typia.IValidation<ObjectGenericAlias> => {
            const errors = [] as any[];
            const __is = (input: any): input is ObjectGenericAlias => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof (input as any).value
                );
            };
            if (false === __is(input)) {
                const $report = (typia.validate as any).report(errors);
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
                                expected: "ObjectGenericAlias.Alias",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "ObjectGenericAlias.Alias",
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
        })(input),
    );
