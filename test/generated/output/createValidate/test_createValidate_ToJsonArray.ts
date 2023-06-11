import typia from "../../../../src";
import { ToJsonArray } from "../../../structures/ToJsonArray";
import { _test_validate } from "../../../internal/_test_validate";
export const test_createValidate_ToJsonArray = _test_validate("ToJsonArray", ToJsonArray.generate, (input: any): typia.IValidation<ToJsonArray> => {
    const errors = [] as any[];
    const $report = (typia.createValidate as any).report(errors);
    const __is = (input: any): input is ToJsonArray => {
        const $io0 = (input: any): boolean => "function" === typeof input.toJSON;
        const $io1 = (input: any): boolean => "function" === typeof input.toJSON;
        const $io2 = (input: any): boolean => "function" === typeof input.toJSON;
        const $io3 = (input: any): boolean => "function" === typeof input.toJSON;
        return Array.isArray(input) && (input.length === 4 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io1(input[1])) && ("object" === typeof input[2] && null !== input[2] && $io2(input[2])) && ("object" === typeof input[3] && null !== input[3] && $io3(input[3])));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ToJsonArray => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["function" === typeof input.toJSON || $report(_exceptionable, {
                    path: _path + ".toJSON",
                    expected: "unknown",
                    value: input.toJSON
                })].every((flag: boolean) => flag);
            const $vo1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["function" === typeof input.toJSON || $report(_exceptionable, {
                    path: _path + ".toJSON",
                    expected: "unknown",
                    value: input.toJSON
                })].every((flag: boolean) => flag);
            const $vo2 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["function" === typeof input.toJSON || $report(_exceptionable, {
                    path: _path + ".toJSON",
                    expected: "unknown",
                    value: input.toJSON
                })].every((flag: boolean) => flag);
            const $vo3 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["function" === typeof input.toJSON || $report(_exceptionable, {
                    path: _path + ".toJSON",
                    expected: "unknown",
                    value: input.toJSON
                })].every((flag: boolean) => flag);
            return (Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "ToJsonArray",
                value: input
            })) && ((input.length === 4 || $report(true, {
                path: _path + "",
                expected: "[ToJsonArray.IArray<boolean>, ToJsonArray.IArray<number>, ToJsonArray.IArray<string>, ToJsonArray.IArray<ToJsonArray.IObject>]",
                value: input
            })) && [
                ("object" === typeof input[0] && null !== input[0] || $report(true, {
                    path: _path + "[0]",
                    expected: "ToJsonArray.IArray<boolean>",
                    value: input[0]
                })) && $vo0(input[0], _path + "[0]", true) || $report(true, {
                    path: _path + "[0]",
                    expected: "ToJsonArray.IArray<boolean>",
                    value: input[0]
                }),
                ("object" === typeof input[1] && null !== input[1] || $report(true, {
                    path: _path + "[1]",
                    expected: "ToJsonArray.IArray<number>",
                    value: input[1]
                })) && $vo1(input[1], _path + "[1]", true) || $report(true, {
                    path: _path + "[1]",
                    expected: "ToJsonArray.IArray<number>",
                    value: input[1]
                }),
                ("object" === typeof input[2] && null !== input[2] || $report(true, {
                    path: _path + "[2]",
                    expected: "ToJsonArray.IArray<string>",
                    value: input[2]
                })) && $vo2(input[2], _path + "[2]", true) || $report(true, {
                    path: _path + "[2]",
                    expected: "ToJsonArray.IArray<string>",
                    value: input[2]
                }),
                ("object" === typeof input[3] && null !== input[3] || $report(true, {
                    path: _path + "[3]",
                    expected: "ToJsonArray.IArray<ToJsonArray.IObject>",
                    value: input[3]
                })) && $vo3(input[3], _path + "[3]", true) || $report(true, {
                    path: _path + "[3]",
                    expected: "ToJsonArray.IArray<ToJsonArray.IObject>",
                    value: input[3]
                })
            ].every((flag: boolean) => flag)) || $report(true, {
                path: _path + "",
                expected: "ToJsonArray",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
});
