import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_notation_createValidateSnake_ConstantAtomicSimple =
  _test_notation_validateGeneral("ConstantAtomicSimple")<ConstantAtomicSimple>(
    ConstantAtomicSimple,
  )<typia.SnakeCase<ConstantAtomicSimple>>({
    convert: typia.notations.createValidateSnake<ConstantAtomicSimple>(),
    assert: typia.createAssert<typia.SnakeCase<ConstantAtomicSimple>>(),
  });
