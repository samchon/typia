import typia from "../../../src";

import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_AtomicSimple = _test_assertStringify(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.assertStringify(input),
    AtomicSimple.SPOILERS,
);
