import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_json_validateStringify_ArrayHierarchicalPointer = (): void =>
  _test_json_validateStringify(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)((input) =>
    typia.json.validateStringify<ArrayHierarchicalPointer>(input),
  );
