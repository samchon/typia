import typia from "../../../../src";
import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_misc_validatePrune_ObjectGenericAlias =
    _test_misc_validatePrune<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
        ((input: any): typia.IValidation<ObjectGenericAlias> => {
            const validate = (
                input: any,
            ): typia.IValidation<ObjectGenericAlias> => {
                const errors = [] as any[];
                const __is = (input: any): input is ObjectGenericAlias => {
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "string" === typeof (input as any).value
                    );
                };
                if (false === __is(input)) {
                    const $report = (typia.misc.validatePrune as any).report(
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
            };
            const prune = (input: ObjectGenericAlias): void => {
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                if ("object" === typeof input && null !== input) $po0(input);
            };
            const output = validate(input);
            if (output.success) prune(input);
            return output;
        })(input),
    );
