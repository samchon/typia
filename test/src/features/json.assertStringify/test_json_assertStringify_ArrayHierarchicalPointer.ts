import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_json_assertStringify_ArrayHierarchicalPointer = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)((input) =>
    typia.json.assertStringify<ArrayHierarchicalPointer>(input),
  );
