import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_notation_createValidateCamel_ConstantAtomicAbsorbed =
  (): void =>
    _test_notation_validateGeneral(
      "ConstantAtomicAbsorbed",
    )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)<
      typia.CamelCase<ConstantAtomicAbsorbed>
    >({
      convert: typia.notations.createValidateCamel<ConstantAtomicAbsorbed>(),
      assert: typia.createAssert<typia.CamelCase<ConstantAtomicAbsorbed>>(),
    });
