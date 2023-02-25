import typia from "../../../src";

import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_TupleHierarchical = _test_clone(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => typia.clone(input),
);
