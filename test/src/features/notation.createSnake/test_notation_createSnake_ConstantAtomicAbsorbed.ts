import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_notation_createValidateSnake_ConstantAtomicAbsorbed =
  (): void =>
    _test_notation_validateGeneral(
      "ConstantAtomicAbsorbed",
    )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)<
      typia.SnakeCase<ConstantAtomicAbsorbed>
    >({
      convert: typia.notations.createValidateSnake<ConstantAtomicAbsorbed>(),
      assert: typia.createAssert<typia.SnakeCase<ConstantAtomicAbsorbed>>(),
    });
