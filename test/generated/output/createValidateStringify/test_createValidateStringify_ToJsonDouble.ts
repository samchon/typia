import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_createValidateStringify_ToJsonDouble =
    _test_validateStringify(
        "ToJsonDouble",
        ToJsonDouble.generate,
        (input: ToJsonDouble): typia.IValidation<string> => {
            const validate: any = (
                input: any,
            ): typia.IValidation<ToJsonDouble> => {
                const __is: any = (input: any): input is ToJsonDouble => {
                    return "object" === typeof input && null !== input && true;
                };
                const errors: any = [] as any[];
                const $report: any = (
                    typia.createValidateStringify as any
                ).report(errors);
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
            const stringify: any = (input: ToJsonDouble): string => {
                const $number: any = (typia.createValidateStringify as any)
                    .number;
                const $so0: any = (input: any): any =>
                    `{"id":${$number(input.id)},"flag":${input.flag}}`;
                return $so0(input.toJSON());
            };
            const output: any = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        },
    );
