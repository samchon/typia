import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createValidate_DynamicEnumeration = _test_validate(
  "DynamicEnumeration",
)<DynamicEnumeration>(DynamicEnumeration)(
  typia.createValidate<DynamicEnumeration>(),
);
