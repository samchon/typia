import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_notation_validateSnake_ConstantAtomicSimple = (): void =>
  _test_notation_validateGeneral("ConstantAtomicSimple")<ConstantAtomicSimple>(
    ConstantAtomicSimple,
  )<typia.SnakeCase<ConstantAtomicSimple>>({
    convert: (input) =>
      typia.notations.validateSnake<ConstantAtomicSimple>(input),
    assert: typia.createAssert<typia.SnakeCase<ConstantAtomicSimple>>(),
  });
