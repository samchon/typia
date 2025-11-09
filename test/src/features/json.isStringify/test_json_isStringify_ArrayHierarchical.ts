import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_json_isStringify_ArrayHierarchical = (): void =>
  _test_json_isStringify("ArrayHierarchical")<ArrayHierarchical>(
    ArrayHierarchical,
  )((input) => typia.json.isStringify<ArrayHierarchical>(input));
