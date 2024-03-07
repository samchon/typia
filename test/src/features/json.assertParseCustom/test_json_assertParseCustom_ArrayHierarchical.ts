import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ArrayHierarchical =
  _test_json_assertParse(CustomGuardError)(
    "ArrayHierarchical",
  )<ArrayHierarchical>(ArrayHierarchical)((input) =>
    typia.json.assertParse<ArrayHierarchical>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
