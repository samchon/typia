import typia from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_equals } from "../internal/_test_equals";
export const test_equals_AtomicUnion = _test_equals("AtomicUnion", AtomicUnion.generate, (input) => ((input: any, _exceptionable: boolean): input is AtomicUnion => {
    return Array.isArray(input) && input.every((elem: any, _index1: number) => "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem);
})(input));
