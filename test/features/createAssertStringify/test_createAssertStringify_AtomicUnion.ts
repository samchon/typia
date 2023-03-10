import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_createAssertStringify_AtomicUnion = _test_assertStringify(
    "AtomicUnion",
    AtomicUnion.generate,
    typia.createAssertStringify<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
