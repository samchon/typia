import typia from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_is } from "../internal/_test_is";
export const test_is_ObjectTuple = _test_is("ObjectTuple", ObjectTuple.generate, (input) => ((input: any): input is ObjectTuple => {
    const $io0 = (input: any) => "string" === typeof input.id && "string" === typeof input.code && "string" === typeof input.name;
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.mobile && "string" === typeof input.name;
    return Array.isArray(input) && (input.length === 2 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io1(input[1])));
})(input), ObjectTuple.SPOILERS);
