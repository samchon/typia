import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_json_assertParse_ArrayHierarchicalPointer =
  _test_json_assertParse("ArrayHierarchicalPointer")<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer,
  )((input) => typia.json.assertParse<ArrayHierarchicalPointer>(input));
