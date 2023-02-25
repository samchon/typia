import typia from "../../../src";

import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_TupleHierarchical = _test_stringify(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => typia.stringify(input),
);
