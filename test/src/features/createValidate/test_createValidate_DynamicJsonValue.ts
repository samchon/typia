import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_createValidate_DynamicJsonValue = (): void =>
  _test_validate("DynamicJsonValue")<DynamicJsonValue>(DynamicJsonValue)(
    typia.createValidate<DynamicJsonValue>(),
  );
