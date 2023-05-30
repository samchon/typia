import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ArraySimple } from "../../../structures/ArraySimple";
export const test_createIs_ArraySimple = _test_is("ArraySimple", ArraySimple.generate, (input: any): input is ArraySimple => {
    const $io0 = (input: any): boolean => "string" === typeof input.name && "string" === typeof input.email && (Array.isArray(input.hobbies) && input.hobbies.every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem)));
    const $io1 = (input: any): boolean => "string" === typeof input.name && "string" === typeof input.body && ("number" === typeof input.rank && Number.isFinite(input.rank));
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}, ArraySimple.SPOILERS);
