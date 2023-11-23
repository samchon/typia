import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createValidate_TupleHierarchical = _test_validate(
  "TupleHierarchical",
)<TupleHierarchical>(TupleHierarchical)(
  typia.createValidate<TupleHierarchical>(),
);
