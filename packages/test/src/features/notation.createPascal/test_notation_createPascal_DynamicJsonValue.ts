import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_notation_createValidatePascal_DynamicJsonValue =
  _test_notation_validateGeneral("DynamicJsonValue")<DynamicJsonValue>(
    DynamicJsonValue,
  )<typia.PascalCase<DynamicJsonValue>>({
    convert: typia.notations.createValidatePascal<DynamicJsonValue>(),
    assert: typia.createAssert<typia.PascalCase<DynamicJsonValue>>(),
  });
