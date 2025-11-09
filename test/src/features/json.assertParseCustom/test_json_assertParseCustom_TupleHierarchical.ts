import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_json_assertParseCustom_TupleHierarchical = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "TupleHierarchical",
  )<TupleHierarchical>(TupleHierarchical)((input) =>
    typia.json.assertParse<TupleHierarchical>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
