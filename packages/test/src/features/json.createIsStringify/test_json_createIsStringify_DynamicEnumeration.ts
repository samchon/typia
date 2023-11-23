import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_json_createIsStringify_DynamicEnumeration =
  _test_json_isStringify("DynamicEnumeration")<DynamicEnumeration>(
    DynamicEnumeration,
  )(typia.json.createIsStringify<DynamicEnumeration>());
