import typia from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_is } from "../internal/_test_is";
export const test_createIs_ArrayRecursive = _test_is("ArrayRecursive", ArrayRecursive.generate, (input: any): input is ICategory => {
    const $io0 = (input: any) => Array.isArray(input.children) && input.children.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && "number" === typeof input.id && "string" === typeof input.code && "number" === typeof input.sequence && ("object" === typeof input.created_at && null !== input.created_at && ("number" === typeof input.created_at.time && "number" === typeof input.created_at.zone));
    return "object" === typeof input && null !== input && $io0(input);
}, ArrayRecursive.SPOILERS);
