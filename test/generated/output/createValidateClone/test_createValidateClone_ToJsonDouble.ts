import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_createValidateClone_ToJsonDouble = _test_validateClone(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input: any): typia.IValidation<typia.Primitive<ToJsonDouble>> => {
        const validate: any = (input: any): typia.IValidation<ToJsonDouble> => {
            const __is: any = (input: any): input is ToJsonDouble => {
                return "object" === typeof input && null !== input && true;
            };
            const errors: any = [] as any[];
            const $report: any = (typia.createValidateClone as any).report(
                errors,
            );
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ToJsonDouble => {
                    const $vo0: any = (
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
            const success: any = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        };
        const clone: any = (
            input: ToJsonDouble,
        ): typia.Primitive<ToJsonDouble> => {
            const $co0: any = (input: any): any => ({
                id: input.id as any,
                flag: input.flag as any,
            });
            return "object" === typeof input &&
                null !== input &&
                "function" === typeof input.toJSON
                ? "object" === typeof input.toJSON() && null !== input.toJSON()
                    ? $co0(input.toJSON())
                    : (input.toJSON() as any)
                : (input as any);
        };
        const output: any = validate(input) as any;
        if (output.success) output.data = clone(input);
        return output;
    },
);
