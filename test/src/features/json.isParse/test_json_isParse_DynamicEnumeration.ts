import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_json_isParse_DynamicEnumeration = (): void =>
  _test_json_isParse("DynamicEnumeration")<DynamicEnumeration>(
    DynamicEnumeration,
  )((input) => typia.json.isParse<DynamicEnumeration>(input));
