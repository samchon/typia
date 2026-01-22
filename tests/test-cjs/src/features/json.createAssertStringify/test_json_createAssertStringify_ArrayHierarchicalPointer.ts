import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_json_createAssertStringify_ArrayHierarchicalPointer =
  (): void =>
    _test_json_assertStringify(TypeGuardError)(
      "ArrayHierarchicalPointer",
    )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
      typia.json.createAssertStringify<ArrayHierarchicalPointer>(),
    );
