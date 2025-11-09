import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_json_createAssertParse_ArrayHierarchicalPointer = (): void =>
  _test_json_assertParse(TypeGuardError)(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
    typia.json.createAssertParse<ArrayHierarchicalPointer>(),
  );
