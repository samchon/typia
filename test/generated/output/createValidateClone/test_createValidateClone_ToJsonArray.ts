import typia from "../../../src";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_createValidateClone_ToJsonArray = _test_validateClone("ToJsonArray", ToJsonArray.generate, (input: any): typia.IValidation<typia.Primitive<ToJsonArray>> => { const validate = (input: any): typia.IValidation<ToJsonArray> => {
    const errors = [] as any[];
    const $report = (typia.createValidateClone as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ToJsonArray => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => [true || $report(_exceptionable, {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON
            })].every((flag: boolean) => flag);
        const $vo1 = (input: any, _path: string, _exceptionable: boolean) => [true || $report(_exceptionable, {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON
            })].every((flag: boolean) => flag);
        const $vo2 = (input: any, _path: string, _exceptionable: boolean) => [true || $report(_exceptionable, {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON
            })].every((flag: boolean) => flag);
        const $vo3 = (input: any, _path: string, _exceptionable: boolean) => [true || $report(_exceptionable, {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON
            })].every((flag: boolean) => flag);
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "[Resolve<ToJsonArray.IArray<boolean>>, Resolve<ToJsonArray.IArray<number>>, Resolve<ToJsonArray.IArray<string>>, Resolve<ToJsonArray.IArray<ToJsonArray.IObject>>]",
            value: input
        })) && ((input.length === 4 || $report(true, {
            path: _path + "",
            expected: "[Resolve<ToJsonArray.IArray<boolean>>, Resolve<ToJsonArray.IArray<number>>, Resolve<ToJsonArray.IArray<string>>, Resolve<ToJsonArray.IArray<ToJsonArray.IObject>>]",
            value: input
        })) && [
            ("object" === typeof input[0] && null !== input[0] || $report(true, {
                path: _path + "[0]",
                expected: "Resolve<ToJsonArray.IArray<boolean>>",
                value: input[0]
            })) && $vo0(input[0], _path + "[0]", true) || $report(true, {
                path: _path + "[0]",
                expected: "Resolve<ToJsonArray.IArray<boolean>>",
                value: input[0]
            }),
            ("object" === typeof input[1] && null !== input[1] || $report(true, {
                path: _path + "[1]",
                expected: "Resolve<ToJsonArray.IArray<number>>",
                value: input[1]
            })) && $vo1(input[1], _path + "[1]", true) || $report(true, {
                path: _path + "[1]",
                expected: "Resolve<ToJsonArray.IArray<number>>",
                value: input[1]
            }),
            ("object" === typeof input[2] && null !== input[2] || $report(true, {
                path: _path + "[2]",
                expected: "Resolve<ToJsonArray.IArray<string>>",
                value: input[2]
            })) && $vo2(input[2], _path + "[2]", true) || $report(true, {
                path: _path + "[2]",
                expected: "Resolve<ToJsonArray.IArray<string>>",
                value: input[2]
            }),
            ("object" === typeof input[3] && null !== input[3] || $report(true, {
                path: _path + "[3]",
                expected: "Resolve<ToJsonArray.IArray<ToJsonArray.IObject>>",
                value: input[3]
            })) && $vo3(input[3], _path + "[3]", true) || $report(true, {
                path: _path + "[3]",
                expected: "Resolve<ToJsonArray.IArray<ToJsonArray.IObject>>",
                value: input[3]
            })
        ].every((flag: boolean) => flag)) || $report(true, {
            path: _path + "",
            expected: "[Resolve<ToJsonArray.IArray<boolean>>, Resolve<ToJsonArray.IArray<number>>, Resolve<ToJsonArray.IArray<string>>, Resolve<ToJsonArray.IArray<ToJsonArray.IObject>>]",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ToJsonArray>;
}; const clone = (input: ToJsonArray): typia.Primitive<ToJsonArray> => {
    const $co0 = (input: any) => ({
        id: input.id
    });
    return Array.isArray(input) && (input.length === 4 && true && true && true && true) ? [
        "object" === typeof input[0] && null !== input[0] && "function" === typeof input[0].toJSON ? Array.isArray(input[0].toJSON()) ? input[0].toJSON().map((elem: any) => elem) : input[0].toJSON() : input[0],
        "object" === typeof input[1] && null !== input[1] && "function" === typeof input[1].toJSON ? Array.isArray(input[1].toJSON()) ? input[1].toJSON().map((elem: any) => elem) : input[1].toJSON() : input[1],
        "object" === typeof input[2] && null !== input[2] && "function" === typeof input[2].toJSON ? Array.isArray(input[2].toJSON()) ? input[2].toJSON().map((elem: any) => elem) : input[2].toJSON() : input[2],
        "object" === typeof input[3] && null !== input[3] && "function" === typeof input[3].toJSON ? Array.isArray(input[3].toJSON()) ? input[3].toJSON().map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input[3].toJSON() : input[3]
    ] : input;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; });
