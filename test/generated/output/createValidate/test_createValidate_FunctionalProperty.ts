import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { FunctionalProperty } from "../../../structures/FunctionalProperty";

export const test_validate_FunctionalProperty =
    _test_validate<FunctionalProperty>(FunctionalProperty)(
        (input: any): typia.IValidation<FunctionalProperty> => {
            const errors = [] as any[];
            const __is = (input: any): input is FunctionalProperty => {
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "function" === typeof input.closure;
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input)) {
                const $report = (typia.createValidate as any).report(errors);
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is FunctionalProperty => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            "string" === typeof input.name ||
                                $report(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "string",
                                    value: input.name,
                                }),
                            "function" === typeof input.closure ||
                                $report(_exceptionable, {
                                    path: _path + ".closure",
                                    expected: "unknown",
                                    value: input.closure,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "FunctionalProperty",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "FunctionalProperty",
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
        },
    );
