import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_notation_validateSnake_ConstantAtomicUnion =
  _test_notation_validateGeneral("ConstantAtomicUnion")<ConstantAtomicUnion>(
    ConstantAtomicUnion,
  )<typia.SnakeCase<ConstantAtomicUnion>>({
    convert: (input) =>
      typia.notations.validateSnake<ConstantAtomicUnion>(input),
    assert: typia.createAssert<typia.SnakeCase<ConstantAtomicUnion>>(),
  });
