import typia from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_ObjectTuple = _test_isClone("ObjectTuple", ObjectTuple.generate, (input) => ((input: any): typia.Primitive<ObjectTuple> | null => { const is = (input: any): input is ObjectTuple => {
    const $io0 = (input: any) => "string" === typeof input.id && "string" === typeof input.code && "string" === typeof input.name;
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.mobile && "string" === typeof input.name;
    return Array.isArray(input) && (input.length === 2 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io1(input[1])));
}; const clone = (input: ObjectTuple): typia.Primitive<ObjectTuple> => {
    const $io0 = (input: any) => "string" === typeof input.id && "string" === typeof input.code && "string" === typeof input.name;
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.mobile && "string" === typeof input.name;
    const $co0 = (input: any) => ({
        id: input.id,
        code: input.code,
        name: input.name
    });
    const $co1 = (input: any) => ({
        id: input.id,
        mobile: input.mobile,
        name: input.name
    });
    return Array.isArray(input) && (input.length === 2 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io1(input[1]))) ? [
        "object" === typeof input[0] && null !== input[0] ? $co0(input[0]) : input[0],
        "object" === typeof input[1] && null !== input[1] ? $co1(input[1]) : input[1]
    ] : input;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), ObjectTuple.SPOILERS);
