import typia from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_validateParse } from "../internal/_test_validateParse";
export const test_validateParse_TagObjectUnion = _test_validateParse("TagObjectUnion", TagObjectUnion.generate, (input) => ((input: string): typia.IValidation<typia.Primitive<TagObjectUnion>> => { const validate = (input: any): typia.IValidation<TagObjectUnion> => {
    const errors = [] as any[];
    const $report = (typia.validateParse as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is TagObjectUnion => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.value && 3 <= input.value || $report(_exceptionable, {
                path: _path + ".value",
                expected: "number",
                value: input.value
            })].every((flag: boolean) => flag);
        const $vo1 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.value && 3 <= input.value.length && 7 >= input.value.length || $report(_exceptionable, {
                path: _path + ".value",
                expected: "string",
                value: input.value
            })].every((flag: boolean) => flag);
        const $vu0 = (input: any, _path: string, _exceptionable: boolean) => (() => {
            if ("number" === typeof input.value)
                return $vo0(input, _path, true && _exceptionable);
            if ("string" === typeof input.value)
                return $vo1(input, _path, true && _exceptionable);
            return $report(_exceptionable, {
                path: _path,
                expected: "(TagObjectUnion.Numeric | TagObjectUnion.Literal)",
                value: input
            });
        })();
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<(Resolve<TagObjectUnion.Literal> | Resolve<TagObjectUnion.Numeric>)>",
            value: input
        })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<TagObjectUnion.Literal> | Resolve<TagObjectUnion.Numeric>)",
            value: elem
        })) && $vu0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<TagObjectUnion.Literal> | Resolve<TagObjectUnion.Numeric>)",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<(Resolve<TagObjectUnion.Literal> | Resolve<TagObjectUnion.Numeric>)>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<TagObjectUnion>;
}; input = JSON.parse(input); const output = validate(input); return output; })(input), TagObjectUnion.SPOILERS);
