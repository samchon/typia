import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_AtomicUnion = _test_assertStringify(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => TSON.assertStringify(input),
    AtomicUnion.SPOILERS,
);
