import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_createValidate_ObjectGenericAlias = _test_validate(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input: any): typia.IValidation<ObjectGenericAlias> => {
        const __is: any = (input: any): input is ObjectGenericAlias => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof input.value
            );
        };
        const errors: any = [] as any[];
        const $report: any = (typia.createValidate as any).report(errors);
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
    },
    ObjectGenericAlias.SPOILERS,
);
