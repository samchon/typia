import typia from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_isParse } from "../internal/_test_isParse";
export const test_isParse_ArraySimple = _test_isParse("ArraySimple", ArraySimple.generate, (input) => ((input: any): typia.Primitive<ArraySimple> => { const is = (input: any): input is ArraySimple => {
    const $io0 = (input: any) => "string" === typeof input.name && "string" === typeof input.email && (Array.isArray(input.hobbies) && input.hobbies.every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem)));
    const $io1 = (input: any) => "string" === typeof input.name && "string" === typeof input.body && "number" === typeof input.rank;
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; input = JSON.parse(input); return is(input) ? input as any : null; })(input), ArraySimple.SPOILERS);
