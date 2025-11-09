import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_notation_validatePascal_ConstantAtomicAbsorbed = (): void =>
  _test_notation_validateGeneral(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)<
    typia.PascalCase<ConstantAtomicAbsorbed>
  >({
    convert: (input) =>
      typia.notations.validatePascal<ConstantAtomicAbsorbed>(input),
    assert: typia.createAssert<typia.PascalCase<ConstantAtomicAbsorbed>>(),
  });
