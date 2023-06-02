import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_validateParse_ObjectGenericAlias = _test_validateParse(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) =>
        ((
            input: string,
        ): typia.IValidation<typia.Primitive<ObjectGenericAlias>> => {
            const validate: any = (
                input: any,
            ): typia.IValidation<ObjectGenericAlias> => {
                const __is: any = (input: any): input is ObjectGenericAlias => {
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "string" === typeof input.value
                    );
                };
                const errors: any = [] as any[];
                const $report: any = (typia.validateParse as any).report(
                    errors,
                );
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectGenericAlias => {
                        const $vo0: any = (
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
        })(input),
    ObjectGenericAlias.SPOILERS,
);
