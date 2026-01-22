import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_standardSchema_createValidate_DynamicEnumeration = (): void =>
  _test_standardSchema_validate("DynamicEnumeration")<DynamicEnumeration>(
    DynamicEnumeration,
  )(typia.createValidate<DynamicEnumeration>());
