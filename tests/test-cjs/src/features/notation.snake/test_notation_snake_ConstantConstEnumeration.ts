import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_notation_validateSnake_ConstantConstEnumeration = (): void =>
  _test_notation_validateGeneral(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)<
    typia.SnakeCase<ConstantConstEnumeration>
  >({
    convert: (input) =>
      typia.notations.validateSnake<ConstantConstEnumeration>(input),
    assert: typia.createAssert<typia.SnakeCase<ConstantConstEnumeration>>(),
  });
