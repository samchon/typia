import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { ObjectTuple } from "../../../structures/ObjectTuple";
export const test_createIsParse_ObjectTuple = _test_isParse("ObjectTuple", ObjectTuple.generate, (input: any): typia.Primitive<ObjectTuple> => { const is = (input: any): input is ObjectTuple => {
    const $io0 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.code && "string" === typeof input.name;
    const $io1 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.mobile && "string" === typeof input.name;
    return Array.isArray(input) && (input.length === 2 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io1(input[1])));
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ObjectTuple.SPOILERS);
