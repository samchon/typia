import typia from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_is } from "../internal/_test_is";
export const test_createIs_AtomicUnion = _test_is("AtomicUnion", AtomicUnion.generate, (input: any): input is AtomicUnion => {
    return Array.isArray(input) && input.every((elem: any) => "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem);
}, AtomicUnion.SPOILERS);
