import typia from "../../../../src";
import { _test_misc_validateClone } from "../../../internal/_test_misc_validateClone";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_misc_validateClone_ToJsonNull = _test_misc_validateClone(
    "ToJsonNull",
)<ToJsonNull>(ToJsonNull)(
    (input: any): typia.IValidation<typia.Primitive<ToJsonNull>> => {
        const validate = (input: any): typia.IValidation<ToJsonNull> => {
            const errors = [] as any[];
            const __is = (input: any): input is ToJsonNull => {
                const $io0 = (input: any): boolean => true;
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input)) {
                const $report = (typia.misc.createValidateClone as any).report(
                    errors,
                );
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ToJsonNull => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            true ||
                                $report(_exceptionable, {
                                    path: _path + ".toJSON",
                                    expected: "unknown",
                                    value: input.toJSON,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ToJsonNull",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "ToJsonNull",
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
        const clone = (input: ToJsonNull): typia.Primitive<ToJsonNull> => {
            return "object" === typeof input &&
                null !== input &&
                "function" === typeof input.toJSON
                ? (input.toJSON() as any)
                : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = clone(input);
        return output;
    },
);
