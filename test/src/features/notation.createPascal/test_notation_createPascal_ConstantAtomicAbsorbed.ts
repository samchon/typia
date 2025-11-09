import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_notation_createValidatePascal_ConstantAtomicAbsorbed = (): void =>
    _test_notation_validateGeneral("ConstantAtomicAbsorbed")<ConstantAtomicAbsorbed>(
        ConstantAtomicAbsorbed
  )<typia.PascalCase<ConstantAtomicAbsorbed>>({
    convert: typia.notations.createValidatePascal<ConstantAtomicAbsorbed>(),
    assert: typia.createAssert<typia.PascalCase<ConstantAtomicAbsorbed>>(),
  });
