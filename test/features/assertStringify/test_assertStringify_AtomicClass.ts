import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_assertStringify_AtomicClass = _test_assertStringify(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.assertStringify(input),
    AtomicClass.SPOILERS,
);
