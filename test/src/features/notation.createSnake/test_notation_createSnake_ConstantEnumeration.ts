import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_notation_createValidateSnake_ConstantEnumeration =
  _test_notation_validateGeneral("ConstantEnumeration")<ConstantEnumeration>(
    ConstantEnumeration,
  )<typia.SnakeCase<ConstantEnumeration>>({
    convert: typia.notations.createValidateSnake<ConstantEnumeration>(),
    assert: typia.createAssert<typia.SnakeCase<ConstantEnumeration>>(),
  });
