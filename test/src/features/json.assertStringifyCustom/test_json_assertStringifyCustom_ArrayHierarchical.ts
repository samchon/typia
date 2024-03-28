import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_json_assertStringifyCustom_ArrayHierarchical =
  _test_json_assertStringify(CustomGuardError)(
    "ArrayHierarchical",
  )<ArrayHierarchical>(ArrayHierarchical)((input) =>
    typia.json.assertStringify<ArrayHierarchical>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
