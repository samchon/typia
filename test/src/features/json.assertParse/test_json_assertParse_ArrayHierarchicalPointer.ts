import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

import { TypeGuardError } from "typia";

export const test_json_assertParse_ArrayHierarchicalPointer =
  _test_json_assertParse(TypeGuardError)(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)((input) =>
    typia.json.assertParse<ArrayHierarchicalPointer>(input),
  );
