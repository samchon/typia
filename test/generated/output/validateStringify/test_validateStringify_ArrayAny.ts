import typia from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_validateStringify_ArrayAny = _test_validateStringify("ArrayAny", ArrayAny.generate, (input) => ((input: ArrayAny): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<ArrayAny> => {
    const errors = [] as any[];
    const $report = (typia.validateStringify as any).report(errors);
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
}; const stringify = (input: ArrayAny): string => {
    const $so0 = (input: any) => `{"anys":${JSON.stringify(input.anys)},"undefindable1":${JSON.stringify(input.undefindable1)},"undefindable2":${JSON.stringify(input.undefindable2)},"nullables1":${JSON.stringify(input.nullables1)},"nullables2":${JSON.stringify(input.nullables2)},"both1":${JSON.stringify(input.both1)},"both2":${JSON.stringify(input.both2)},"both3":${JSON.stringify(input.both3)},"union":${JSON.stringify(input.union)}}`;
    return $so0(input);
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; })(input), ArrayAny.SPOILERS);
