import typia from "typia";

import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_TupleHierarchical = _test_assertStringify(
    "TupleHierarchical",
    TupleHierarchical.generate,
    typia.createAssertStringify<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
