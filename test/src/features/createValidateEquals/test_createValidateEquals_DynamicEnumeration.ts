import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createValidateEquals_DynamicEnumeration = (): void =>
  _test_validateEquals("DynamicEnumeration")<DynamicEnumeration>(
    DynamicEnumeration,
  )(typia.createValidateEquals<DynamicEnumeration>());
