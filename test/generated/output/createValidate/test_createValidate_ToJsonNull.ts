import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_createValidate_ToJsonNull = _test_validate(
    "ToJsonNull",
    ToJsonNull.generate,
    (input: any): typia.IValidation<ToJsonNull> => {
        const __is: any = (input: any): input is ToJsonNull => {
            const $io0: any = (input: any): boolean =>
                "function" === typeof input.toJSON;
            return "object" === typeof input && null !== input && $io0(input);
        };
        const errors: any = [] as any[];
        const $report: any = (typia.createValidate as any).report(errors);
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ToJsonNull => {
                const $vo0: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "function" === typeof input.toJSON ||
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
        const success: any = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as any;
    },
);
