import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_json_isStringify_ArrayHierarchicalPointer =
  _test_json_isStringify("ArrayHierarchicalPointer")<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer,
  )((input) => typia.json.isStringify<ArrayHierarchicalPointer>(input));
