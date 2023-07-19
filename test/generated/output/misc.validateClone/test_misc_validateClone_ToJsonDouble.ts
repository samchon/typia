import typia from "../../../../src";
import { _test_misc_validateClone } from "../../../internal/_test_misc_validateClone";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_misc_validateClone_ToJsonDouble =
    _test_misc_validateClone<ToJsonDouble>(ToJsonDouble)((input) =>
        ((
            input: any,
        ): typia.IValidation<typia.Primitive<ToJsonDouble.Parent>> => {
            const validate = (
                input: any,
            ): typia.IValidation<ToJsonDouble.Parent> => {
                const errors = [] as any[];
                const __is = (input: any): input is ToJsonDouble.Parent => {
                    return "object" === typeof input && null !== input && true;
                };
                if (false === __is(input)) {
                    const $report = (typia.misc.validateClone as any).report(
                        errors,
                    );
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ToJsonDouble.Parent => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean => true;
                        return (
                            ((("object" === typeof input &&
                                null !== input &&
                                false === Array.isArray(input)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ToJsonDouble.Parent",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ToJsonDouble.Parent",
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
            const clone = (
                input: ToJsonDouble.Parent,
            ): typia.Primitive<ToJsonDouble.Parent> => {
                const $co1 = (input: any): any => ({
                    id: input.id as any,
                    flag: input.flag as any,
                });
                return "object" === typeof input &&
                    null !== input &&
                    "function" === typeof input.toJSON
                    ? "object" === typeof input.toJSON() &&
                      null !== input.toJSON()
                        ? $co1(input.toJSON())
                        : (input.toJSON() as any)
                    : (input as any);
            };
            const output = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        })(input),
    );
