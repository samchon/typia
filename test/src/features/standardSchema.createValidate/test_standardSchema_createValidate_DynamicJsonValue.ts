import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_standardSchema_createValidate_DynamicJsonValue =
  _test_standardSchema_validate("DynamicJsonValue")<DynamicJsonValue>(
    DynamicJsonValue,
  )(typia.createValidate<DynamicJsonValue>());
