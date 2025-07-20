import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_json_assertParse_ArrayHierarchical = (): void =>
  _test_json_assertParse(TypeGuardError)(
    "ArrayHierarchical",
  )<ArrayHierarchical>(ArrayHierarchical)((input) =>
    typia.json.assertParse<ArrayHierarchical>(input),
  );
