import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { ToJsonUndefined } from "../../../structures/ToJsonUndefined";

export const test_validate_ToJsonUndefined = _test_validate(
    "ToJsonUndefined",
    ToJsonUndefined.generate,
    (input) =>
        ((input: any): typia.IValidation<ToJsonUndefined> => {
            const __is: any = (input: any): input is ToJsonUndefined => {
                return "object" === typeof input && null !== input && true;
            };
            const errors: any = [] as any[];
            const $report: any = (typia.validate as any).report(errors);
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ToJsonUndefined => {
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
                                expected: "ToJsonUndefined",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "ToJsonUndefined",
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
        })(input),
);
