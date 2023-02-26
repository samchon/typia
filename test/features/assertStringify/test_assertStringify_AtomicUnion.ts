import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_assertStringify_AtomicUnion = _test_assertStringify(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.assertStringify(input),
    AtomicUnion.SPOILERS,
);
