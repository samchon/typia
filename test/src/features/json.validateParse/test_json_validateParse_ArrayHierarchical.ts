import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_json_validateParse_ArrayHierarchical = (): void =>
  _test_json_validateParse("ArrayHierarchical")<ArrayHierarchical>(
    ArrayHierarchical,
  )((input) => typia.json.validateParse<ArrayHierarchical>(input));
