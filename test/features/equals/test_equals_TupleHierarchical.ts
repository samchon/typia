import typia from "typia";

import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_TupleHierarchical = _test_equals(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => typia.equals(input),
);
