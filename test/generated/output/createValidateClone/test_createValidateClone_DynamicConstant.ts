import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_createValidateClone_DynamicConstant = _test_validateClone(
    "DynamicConstant",
    DynamicConstant.generate,
    (input: any): typia.IValidation<typia.Primitive<DynamicConstant>> => {
        const validate: any = (
            input: any,
        ): typia.IValidation<DynamicConstant> => {
            const __is: any = (input: any): input is DynamicConstant => {
                const $io0: any = (input: any): boolean =>
                    "number" === typeof input.a &&
                    Number.isFinite(input.a) &&
                    "number" === typeof input.b &&
                    Number.isFinite(input.b) &&
                    "number" === typeof input.c &&
                    Number.isFinite(input.c) &&
                    "number" === typeof input.d &&
                    Number.isFinite(input.d);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
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
                ): input is DynamicConstant => {
                    const $vo0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ("number" === typeof input.a &&
                                Number.isFinite(input.a)) ||
                                $report(_exceptionable, {
                                    path: _path + ".a",
                                    expected: "number",
                                    value: input.a,
                                }),
                            ("number" === typeof input.b &&
                                Number.isFinite(input.b)) ||
                                $report(_exceptionable, {
                                    path: _path + ".b",
                                    expected: "number",
                                    value: input.b,
                                }),
                            ("number" === typeof input.c &&
                                Number.isFinite(input.c)) ||
                                $report(_exceptionable, {
                                    path: _path + ".c",
                                    expected: "number",
                                    value: input.c,
                                }),
                            ("number" === typeof input.d &&
                                Number.isFinite(input.d)) ||
                                $report(_exceptionable, {
                                    path: _path + ".d",
                                    expected: "number",
                                    value: input.d,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "DynamicConstant",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "DynamicConstant",
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
            input: DynamicConstant,
        ): typia.Primitive<DynamicConstant> => {
            const $co0: any = (input: any): any => ({
                a: input.a as any,
                b: input.b as any,
                c: input.c as any,
                d: input.d as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        const output: any = validate(input) as any;
        if (output.success) output.data = clone(input);
        return output;
    },
    DynamicConstant.SPOILERS,
);
