import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_json_assertParse_TupleHierarchical = _test_json_assertParse(
  TypeGuardError,
)("TupleHierarchical")<TupleHierarchical>(TupleHierarchical)((input) =>
  typia.json.assertParse<TupleHierarchical>(input),
);
