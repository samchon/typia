import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_notation_createValidateKebab_ConstantAtomicAbsorbed =
  (): void =>
    _test_notation_validateGeneral(
      "ConstantAtomicAbsorbed",
    )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)<
      typia.KebabCase<ConstantAtomicAbsorbed>
    >({
      convert: typia.notations.createValidateKebab<ConstantAtomicAbsorbed>(),
      assert: typia.createAssert<typia.KebabCase<ConstantAtomicAbsorbed>>(),
    });
