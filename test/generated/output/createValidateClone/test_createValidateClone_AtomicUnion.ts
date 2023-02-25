import typia from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_createValidateClone_AtomicUnion = _test_validateClone("AtomicUnion", AtomicUnion.generate, (input: any): typia.IValidation<typia.Primitive<AtomicUnion>> => { const validate = (input: any): typia.IValidation<AtomicUnion> => {
    const errors = [] as any[];
    const $report = (typia.createValidateClone as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is AtomicUnion => {
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<(boolean | number | string)>",
            value: input
        })) && input.map((elem: any, _index1: number) => "string" === typeof elem || "number" === typeof elem && !Number.isNaN(elem) || "boolean" === typeof elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(boolean | number | string)",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<(boolean | number | string)>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<AtomicUnion>;
}; const clone = (input: AtomicUnion): typia.Primitive<AtomicUnion> => {
    return Array.isArray(input) ? input.map((elem: any) => elem) : input;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; }, AtomicUnion.SPOILERS);
