import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_isStringify_AtomicUnion = _test_isStringify(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.isStringify<AtomicUnion>(input),
    AtomicUnion.SPOILERS,
);
