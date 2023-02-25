import typia from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_validateParse } from "../internal/_test_validateParse";
export const test_validateParse_ArrayAny = _test_validateParse("ArrayAny", ArrayAny.generate, (input) => ((input: string): typia.IValidation<typia.Primitive<ArrayAny>> => { const validate = (input: any): typia.IValidation<ArrayAny> => {
    const errors = [] as any[];
    const $report = (typia.validateParse as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ArrayAny => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => [Array.isArray(input.anys) || $report(_exceptionable, {
                path: _path + ".anys",
                expected: "Array<any>",
                value: input.anys
            }), Array.isArray(input.undefindable1) || $report(_exceptionable, {
                path: _path + ".undefindable1",
                expected: "Array<any>",
                value: input.undefindable1
            }), Array.isArray(input.undefindable2) || $report(_exceptionable, {
                path: _path + ".undefindable2",
                expected: "Array<any>",
                value: input.undefindable2
            }), Array.isArray(input.nullables1) || $report(_exceptionable, {
                path: _path + ".nullables1",
                expected: "Array<any>",
                value: input.nullables1
            }), Array.isArray(input.nullables2) || $report(_exceptionable, {
                path: _path + ".nullables2",
                expected: "Array<any>",
                value: input.nullables2
            }), Array.isArray(input.both1) || $report(_exceptionable, {
                path: _path + ".both1",
                expected: "Array<any>",
                value: input.both1
            }), Array.isArray(input.both2) || $report(_exceptionable, {
                path: _path + ".both2",
                expected: "Array<any>",
                value: input.both2
            }), Array.isArray(input.both3) || $report(_exceptionable, {
                path: _path + ".both3",
                expected: "Array<any>",
                value: input.both3
            }), Array.isArray(input.union) || $report(_exceptionable, {
                path: _path + ".union",
                expected: "Array<any>",
                value: input.union
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<ArrayAny>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<ArrayAny>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ArrayAny>;
}; input = JSON.parse(input); const output = validate(input); return output; })(input), ArrayAny.SPOILERS);
