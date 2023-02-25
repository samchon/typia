import typia from "../../../src";

import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ToJsonAtomicSimple = _test_assertStringify(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    (input) => typia.assertStringify(input),
);
