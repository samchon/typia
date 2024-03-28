import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_json_createAssertStringifyCustom_TupleHierarchical =
  _test_json_assertStringify(CustomGuardError)(
    "TupleHierarchical",
  )<TupleHierarchical>(TupleHierarchical)(
    typia.json.createAssertStringify<TupleHierarchical>(
      (p) => new CustomGuardError(p),
    ),
  );
