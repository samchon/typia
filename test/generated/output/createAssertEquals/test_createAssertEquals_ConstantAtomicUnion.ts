import typia from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_createAssertEquals_ConstantAtomicUnion = _test_assertEquals("ConstantAtomicUnion", ConstantAtomicUnion.generate, (input: any) => {
    const $guard = (typia.createAssertEquals as any).guard;
    const $join = (typia.createAssertEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is ConstantAtomicUnion => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("key" === input.key || $guard(_exceptionable, {
            path: _path + ".key",
            expected: "\"key\"",
            value: input.key
        })) && (1 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["key"].some(prop => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value
            });
        })));
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(\"four\" | \"three\" | 1 | 2 | Resolve<__type> | false)>",
            value: input
        })) && input.every((elem: any, _index1: number) => false === elem || 1 === elem || 2 === elem || "three" === elem || "four" === elem || ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(\"four\" | \"three\" | 1 | 2 | Resolve<__type> | false)",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as ConstantAtomicUnion;
});
