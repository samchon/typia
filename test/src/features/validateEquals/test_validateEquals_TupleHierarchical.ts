import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_validateEquals_TupleHierarchical = (): void => _test_validateEquals(
    "TupleHierarchical",
)<TupleHierarchical>(
    TupleHierarchical
)((input) => typia.validateEquals<TupleHierarchical>(input));
