import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { TagLength } from "../../../structures/TagLength";
export const test_validateClone_TagLength = _test_validateClone("TagLength", TagLength.generate, (input) => ((input: any): typia.IValidation<typia.Primitive<Array<TagLength.Type>>> => { const validate = (input: any): typia.IValidation<Array<TagLength.Type>> => {
    const __is = (input: any): input is Array<TagLength.Type> => {
        const $io0 = (input: any): boolean => "string" === typeof input.fixed && 5 === input.fixed.length && ("string" === typeof input.minimum && 3 <= input.minimum.length) && ("string" === typeof input.maximum && 7 >= input.maximum.length) && ("string" === typeof input.minimum_and_maximum && 3 <= input.minimum_and_maximum.length && 7 >= input.minimum_and_maximum.length);
        return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
    };
    const errors = [] as any[];
    const $report = (typia.validateClone as any).report(errors);
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<TagLength.Type> => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.fixed && (5 === input.fixed.length || $report(_exceptionable, {
                    path: _path + ".fixed",
                    expected: "string (@length 5)",
                    value: input.fixed
                })) || $report(_exceptionable, {
                    path: _path + ".fixed",
                    expected: "string",
                    value: input.fixed
                }), "string" === typeof input.minimum && (3 <= input.minimum.length || $report(_exceptionable, {
                    path: _path + ".minimum",
                    expected: "string (@minLength 3)",
                    value: input.minimum
                })) || $report(_exceptionable, {
                    path: _path + ".minimum",
                    expected: "string",
                    value: input.minimum
                }), "string" === typeof input.maximum && (7 >= input.maximum.length || $report(_exceptionable, {
                    path: _path + ".maximum",
                    expected: "string (@maxLength 7)",
                    value: input.maximum
                })) || $report(_exceptionable, {
                    path: _path + ".maximum",
                    expected: "string",
                    value: input.maximum
                }), "string" === typeof input.minimum_and_maximum && (3 <= input.minimum_and_maximum.length || $report(_exceptionable, {
                    path: _path + ".minimum_and_maximum",
                    expected: "string (@minLength 3)",
                    value: input.minimum_and_maximum
                })) && (7 >= input.minimum_and_maximum.length || $report(_exceptionable, {
                    path: _path + ".minimum_and_maximum",
                    expected: "string (@maxLength 7)",
                    value: input.minimum_and_maximum
                })) || $report(_exceptionable, {
                    path: _path + ".minimum_and_maximum",
                    expected: "string",
                    value: input.minimum_and_maximum
                })].every((flag: boolean) => flag);
            return (Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "Array<TagLength.Type>",
                value: input
            })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "TagLength.Type",
                value: elem
            })) && $vo0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "TagLength.Type",
                value: elem
            })).every((flag: boolean) => flag) || $report(true, {
                path: _path + "",
                expected: "Array<TagLength.Type>",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; const clone = (input: Array<TagLength.Type>): typia.Primitive<Array<TagLength.Type>> => {
    const $co0 = (input: any): any => ({
        fixed: input.fixed as any,
        minimum: input.minimum as any,
        maximum: input.maximum as any,
        minimum_and_maximum: input.minimum_and_maximum as any
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem as any) : input as any;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; })(input), TagLength.SPOILERS);
