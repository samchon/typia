import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { ArraySimple } from "../../../structures/ArraySimple";
export const test_createIsParse_ArraySimple = _test_isParse("ArraySimple", ArraySimple.generate, (input: any): typia.Primitive<ArraySimple> => { const is = (input: any): input is ArraySimple => {
    const $io0 = (input: any): boolean => "string" === typeof input.name && "string" === typeof input.email && (Array.isArray(input.hobbies) && input.hobbies.every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem)));
    const $io1 = (input: any): boolean => "string" === typeof input.name && "string" === typeof input.body && ("number" === typeof input.rank && Number.isFinite(input.rank));
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ArraySimple.SPOILERS);
