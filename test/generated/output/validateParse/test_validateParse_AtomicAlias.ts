import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_validateParse_AtomicAlias = _test_validateParse(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) =>
        ((input: string): typia.IValidation<typia.Primitive<AtomicAlias>> => {
            const validate: any = (
                input: any,
            ): typia.IValidation<AtomicAlias> => {
                const __is: any = (input: any): input is AtomicAlias => {
                    return (
                        Array.isArray(input) &&
                        input.length === 3 &&
                        "boolean" === typeof input[0] &&
                        "number" === typeof input[1] &&
                        Number.isFinite(input[1]) &&
                        "string" === typeof input[2]
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
                    ): input is AtomicAlias => {
                        return (
                            ((Array.isArray(input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "AtomicAlias",
                                    value: input,
                                })) &&
                                (input.length === 3 ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "[boolean, number, string]",
                                        value: input,
                                    })) &&
                                [
                                    "boolean" === typeof input[0] ||
                                        $report(true, {
                                            path: _path + "[0]",
                                            expected: "boolean",
                                            value: input[0],
                                        }),
                                    ("number" === typeof input[1] &&
                                        Number.isFinite(input[1])) ||
                                        $report(true, {
                                            path: _path + "[1]",
                                            expected: "number",
                                            value: input[1],
                                        }),
                                    "string" === typeof input[2] ||
                                        $report(true, {
                                            path: _path + "[2]",
                                            expected: "string",
                                            value: input[2],
                                        }),
                                ].every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "AtomicAlias",
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
    AtomicAlias.SPOILERS,
);
