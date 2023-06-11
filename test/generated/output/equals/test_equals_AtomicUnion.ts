import typia from "../../../../src";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_equals } from "../../../internal/_test_equals";
export const test_equals_AtomicUnion = _test_equals("AtomicUnion", AtomicUnion.generate, (input) => ((input: any, _exceptionable: boolean = true): input is Array<AtomicUnion.Union> => {
    return Array.isArray(input) && input.every((elem: any, _index1: number) => null === elem || "string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || "boolean" === typeof elem);
})(input));
