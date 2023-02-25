import typia from "../../../src";

import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_TupleHierarchical = _test_assertStringify(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => typia.assertStringify(input),
    TupleHierarchical.SPOILERS,
);
