import typia from "../../../../src";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
import { _test_validateClone } from "../../../internal/_test_validateClone";
export const test_createValidateClone_ConstantAtomicUnion = _test_validateClone("ConstantAtomicUnion", ConstantAtomicUnion.generate, (input: any): typia.IValidation<typia.Primitive<ConstantAtomicUnion>> => { const validate = (input: any): typia.IValidation<ConstantAtomicUnion> => {
    const errors = [] as any[];
    const $report = (typia.createValidateClone as any).report(errors);
    const __is = (input: any): input is ConstantAtomicUnion => {
        const $io0 = (input: any): boolean => "key" === input.key;
        return Array.isArray(input) && input.every((elem: any) => false === elem || 1 === elem || 2 === elem || "three" === elem || "four" === elem || "object" === typeof elem && null !== elem && $io0(elem));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ConstantAtomicUnion => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["key" === input.key || $report(_exceptionable, {
                    path: _path + ".key",
                    expected: "\"key\"",
                    value: input.key
                })].every((flag: boolean) => flag);
            return (Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "ConstantAtomicUnion",
                value: input
            })) && input.map((elem: any, _index1: number) => false === elem || 1 === elem || 2 === elem || "three" === elem || "four" === elem || ("object" === typeof elem && null !== elem || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(\"four\" | \"three\" | 1 | 2 | __type | false)",
                value: elem
            })) && $vo0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(\"four\" | \"three\" | 1 | 2 | __type | false)",
                value: elem
            })).every((flag: boolean) => flag) || $report(true, {
                path: _path + "",
                expected: "ConstantAtomicUnion",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; const clone = (input: ConstantAtomicUnion): typia.Primitive<ConstantAtomicUnion> => {
    const $cp0 = (input: any) => input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem as any);
    const $co0 = (input: any): any => ({
        key: input.key as any
    });
    return Array.isArray(input) ? $cp0(input) : input as any;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; }, ConstantAtomicUnion.SPOILERS);
