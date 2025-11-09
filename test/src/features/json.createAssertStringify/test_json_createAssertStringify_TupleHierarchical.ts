import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_json_createAssertStringify_TupleHierarchical = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "TupleHierarchical",
  )<TupleHierarchical>(TupleHierarchical)(
    typia.json.createAssertStringify<TupleHierarchical>(),
  );
