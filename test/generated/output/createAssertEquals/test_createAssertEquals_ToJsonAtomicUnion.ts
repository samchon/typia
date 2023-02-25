import typia from "../../../src";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_createAssertEquals_ToJsonAtomicUnion = _test_assertEquals("ToJsonAtomicUnion", ToJsonAtomicUnion.generate, (input: any) => {
    const $guard = (typia.createAssertEquals as any).guard;
    const $join = (typia.createAssertEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is ToJsonAtomicUnion => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => (true || $guard(_exceptionable, {
            path: _path + ".toJSON",
            expected: "unknown",
            value: input.toJSON
        })) && (1 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["toJSON"].some(prop => key === prop))
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
            expected: "Array<Resolve<ToJsonAtomicUnion.IToJson>>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<ToJsonAtomicUnion.IToJson>",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as ToJsonAtomicUnion;
});
