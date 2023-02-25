import typia from "../../../src";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_assertClone_ToJsonAtomicUnion = _test_assertClone("ToJsonAtomicUnion", ToJsonAtomicUnion.generate, (input) => ((input: any): typia.Primitive<ToJsonAtomicUnion> => { const assert = (input: any) => {
    const $guard = (typia.assertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ToJsonAtomicUnion => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => true || $guard(_exceptionable, {
            path: _path + ".toJSON",
            expected: "unknown",
            value: input.toJSON
        });
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<Resolve<ToJsonAtomicUnion.IToJson>>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<ToJsonAtomicUnion.IToJson>",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as ToJsonAtomicUnion;
}; const clone = (input: ToJsonAtomicUnion): typia.Primitive<ToJsonAtomicUnion> => {
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem && "function" === typeof elem.toJSON ? elem.toJSON() : elem) : input;
}; assert(input); const output = clone(input); /* Array */; return output as ToJsonAtomicUnion; })(input));
