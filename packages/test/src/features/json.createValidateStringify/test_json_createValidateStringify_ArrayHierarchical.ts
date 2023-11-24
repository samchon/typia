import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_json_createValidateStringify_ArrayHierarchical =
  _test_json_validateStringify("ArrayHierarchical")<ArrayHierarchical>(
    ArrayHierarchical,
  )(typia.json.createValidateStringify<ArrayHierarchical>());
