import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";
export const test_clone_ArrayAtomicSimple = _test_clone("ArrayAtomicSimple", ArrayAtomicSimple.generate, (input) => ((input: [Array<boolean>, Array<number>, Array<string>]): typia.Primitive<[Array<boolean>, Array<number>, Array<string>]> => {
    return Array.isArray(input) && (input.length === 3 && (Array.isArray(input[0]) && input[0].every((elem: any) => "boolean" === typeof elem)) && (Array.isArray(input[1]) && input[1].every((elem: any) => "number" === typeof elem)) && (Array.isArray(input[2]) && input[2].every((elem: any) => "string" === typeof elem))) ? [
        Array.isArray(input[0]) ? input[0].map((elem: any) => elem as any) : input[0] as any,
        Array.isArray(input[1]) ? input[1].map((elem: any) => elem as any) : input[1] as any,
        Array.isArray(input[2]) ? input[2].map((elem: any) => elem as any) : input[2] as any
    ] as any : input as any;
})(input));
