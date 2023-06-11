import typia from "../../../../src";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_validateClone } from "../../../internal/_test_validateClone";
export const test_validateClone_AtomicUnion = _test_validateClone("AtomicUnion", AtomicUnion.generate, (input) => ((input: any): typia.IValidation<typia.Primitive<Array<AtomicUnion.Union>>> => { const validate = (input: any): typia.IValidation<Array<AtomicUnion.Union>> => {
    const errors = [] as any[];
    const $report = (typia.validateClone as any).report(errors);
    const __is = (input: any): input is Array<AtomicUnion.Union> => {
        return Array.isArray(input) && input.every((elem: any) => null === elem || "string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || "boolean" === typeof elem);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<AtomicUnion.Union> => {
            return (Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "AtomicUnion",
                value: input
            })) && input.map((elem: any, _index1: number) => null === elem || "string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || "boolean" === typeof elem || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(boolean | null | number | string)",
                value: elem
            })).every((flag: boolean) => flag) || $report(true, {
                path: _path + "",
                expected: "AtomicUnion",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; const clone = (input: Array<AtomicUnion.Union>): typia.Primitive<Array<AtomicUnion.Union>> => {
    const $cp0 = (input: any) => input.map((elem: any) => elem as any);
    return Array.isArray(input) ? $cp0(input) : input as any;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; })(input), AtomicUnion.SPOILERS);
