import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_json_createValidateParse_ArrayHierarchical =
  _test_json_validateParse("ArrayHierarchical")<ArrayHierarchical>(
    ArrayHierarchical,
  )(typia.json.createValidateParse<ArrayHierarchical>());
