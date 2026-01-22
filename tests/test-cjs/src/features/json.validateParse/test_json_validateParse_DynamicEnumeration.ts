import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_json_validateParse_DynamicEnumeration = (): void =>
  _test_json_validateParse("DynamicEnumeration")<DynamicEnumeration>(
    DynamicEnumeration,
  )((input) => typia.json.validateParse<DynamicEnumeration>(input));
