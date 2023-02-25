import typia from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_createValidateClone_TagType = _test_validateClone("TagType", TagType.generate, (input: any): typia.IValidation<typia.Primitive<TagType>> => { const validate = (input: any): typia.IValidation<TagType> => {
    const errors = [] as any[];
    const $report = (typia.createValidateClone as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is TagType => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.int && !Number.isNaN(input.int) && parseInt(input.int) === input.int || $report(_exceptionable, {
                path: _path + ".int",
                expected: "number",
                value: input.int
            }), "number" === typeof input.uint && !Number.isNaN(input.uint) && parseInt(input.uint) === input.uint && 0 <= input.uint || $report(_exceptionable, {
                path: _path + ".uint",
                expected: "number",
                value: input.uint
            })].every((flag: boolean) => flag);
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<TagType.Type>>",
            value: input
        })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<TagType.Type>",
            value: elem
        })) && $vo0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<TagType.Type>",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<TagType.Type>>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<TagType>;
}; const clone = (input: TagType): typia.Primitive<TagType> => {
    const $co0 = (input: any) => ({
        int: input.int,
        uint: input.uint
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; }, TagType.SPOILERS);
