import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_json_createValidateStringify_ArrayHierarchicalPointer =
  _test_json_validateStringify(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
    typia.json.createValidateStringify<ArrayHierarchicalPointer>(),
  );
