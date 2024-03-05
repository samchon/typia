import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_json_assertStringify_ArrayHierarchical =
  _test_json_assertStringify(TypeGuardError)(
    "ArrayHierarchical",
  )<ArrayHierarchical>(ArrayHierarchical)((input) =>
    typia.json.assertStringify<ArrayHierarchical>(input),
  );
