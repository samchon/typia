import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_notation_validateCamel_DynamicJsonValue =
  _test_notation_validateGeneral("DynamicJsonValue")<DynamicJsonValue>(
    DynamicJsonValue,
  )<typia.CamelCase<DynamicJsonValue>>({
    convert: (input) => typia.notations.validateCamel<DynamicJsonValue>(input),
    assert: typia.createAssert<typia.CamelCase<DynamicJsonValue>>(),
  });
