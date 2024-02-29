import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_notation_validateSnake_ConstantAtomicAbsorbed =
  _test_notation_validateGeneral(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)<
    typia.SnakeCase<ConstantAtomicAbsorbed>
  >({
    convert: (input) =>
      typia.notations.validateSnake<ConstantAtomicAbsorbed>(input),
    assert: typia.createAssert<typia.SnakeCase<ConstantAtomicAbsorbed>>(),
  });
