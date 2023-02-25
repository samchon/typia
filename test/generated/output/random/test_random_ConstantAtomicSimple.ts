import typia from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_random } from "../internal/_test_random";
export const test_random_ConstantAtomicSimple = _test_random("ConstantAtomicSimple", () => ((generator: typia.IRandomGenerator = (typia.random as any).generator) => {
    return [
        false,
        true,
        2,
        "three"
    ];
})(), (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is (boolean | 2 | "three")[] => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(\"three\" | 2 | boolean)>",
            value: input
        })) && input.every((elem: any, _index1: number) => 2 === elem || "three" === elem || "boolean" === typeof elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(\"three\" | 2 | boolean)",
            value: elem
        }));
    })(input, "$input", true);
    return input as typia.Primitive<ConstantAtomicSimple>;
});
