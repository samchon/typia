import typia from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_validate } from "../internal/_test_validate";
export const test_validate_ConstantAtomicUnion = _test_validate("ConstantAtomicUnion", ConstantAtomicUnion.generate, (input) => ((input: any): typia.IValidation<ConstantAtomicUnion> => {
    const errors = [] as any[];
    const $report = (typia.validate as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ConstantAtomicUnion => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["key" === input.key || $report(_exceptionable, {
                path: _path + ".key",
                expected: "\"key\"",
                value: input.key
            })].every((flag: boolean) => flag);
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<(\"four\" | \"three\" | 1 | 2 | Resolve<__type> | false)>",
            value: input
        })) && input.map((elem: any, _index1: number) => false === elem || 1 === elem || 2 === elem || "three" === elem || "four" === elem || ("object" === typeof elem && null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(\"four\" | \"three\" | 1 | 2 | Resolve<__type> | false)",
            value: elem
        })) && $vo0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(\"four\" | \"three\" | 1 | 2 | Resolve<__type> | false)",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<(\"four\" | \"three\" | 1 | 2 | Resolve<__type> | false)>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ConstantAtomicUnion>;
})(input), ConstantAtomicUnion.SPOILERS);
