import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_json_createAssertParse_TupleHierarchical = (): void =>
  _test_json_assertParse(TypeGuardError)(
    "TupleHierarchical",
  )<TupleHierarchical>(TupleHierarchical)(
    typia.json.createAssertParse<TupleHierarchical>(),
  );
