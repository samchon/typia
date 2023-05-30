import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { AtomicUnion } from "../../../structures/AtomicUnion";
export const test_createEquals_AtomicUnion = _test_equals("AtomicUnion", AtomicUnion.generate, (input: any, _exceptionable: boolean = true): input is AtomicUnion => {
    return Array.isArray(input) && input.every((elem: any, _index1: number) => null === elem || "string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || "boolean" === typeof elem);
});
