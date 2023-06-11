import typia from "../../../src";

import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_equals } from "../../internal/_test_equals";

export const test_createEquals_TupleHierarchical = _test_equals(
    "TupleHierarchical",
    TupleHierarchical.generate,
    typia.createEquals<TupleHierarchical>(),
);
