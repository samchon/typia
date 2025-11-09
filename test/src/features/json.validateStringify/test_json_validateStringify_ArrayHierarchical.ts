import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_json_validateStringify_ArrayHierarchical = (): void =>
  _test_json_validateStringify("ArrayHierarchical")<ArrayHierarchical>(
    ArrayHierarchical,
  )((input) => typia.json.validateStringify<ArrayHierarchical>(input));
