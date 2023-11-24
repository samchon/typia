import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_notation_createValidateSnake_ConstantConstEnumeration =
  _test_notation_validateGeneral(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)<
    typia.SnakeCase<ConstantConstEnumeration>
  >({
    convert: typia.notations.createValidateSnake<ConstantConstEnumeration>(),
    assert: typia.createAssert<typia.SnakeCase<ConstantConstEnumeration>>(),
  });
