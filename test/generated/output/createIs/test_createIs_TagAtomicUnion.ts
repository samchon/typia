import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";
export const test_createIs_TagAtomicUnion = _test_is("TagAtomicUnion", TagAtomicUnion.generate, (input: any): input is TagAtomicUnion => {
    const $io0 = (input: any): boolean => "string" === typeof input.value && 3 <= input.value.length && 7 >= input.value.length || "number" === typeof input.value && Number.isFinite(input.value) && 3 <= input.value;
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}, TagAtomicUnion.SPOILERS);
