import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_json_createAssertParseCustom_TupleHierarchical =
  _test_json_assertParse(CustomGuardError)(
    "TupleHierarchical",
  )<TupleHierarchical>(TupleHierarchical)(
    typia.json.createAssertParse<TupleHierarchical>(
      (p) => new CustomGuardError(p),
    ),
  );
