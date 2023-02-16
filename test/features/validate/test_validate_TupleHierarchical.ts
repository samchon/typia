import typia from "typia";

import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_TupleHierarchical = _test_validate(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => typia.validate(input),
    TupleHierarchical.SPOILERS,
);
