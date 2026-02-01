import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_notation_createValidatePascal_ConstantAtomicTagged = (): void =>
    _test_notation_validateGeneral("ConstantAtomicTagged")<ConstantAtomicTagged>(
        ConstantAtomicTagged
  )<typia.PascalCase<ConstantAtomicTagged>>({
    convert: typia.notations.createValidatePascal<ConstantAtomicTagged>(),
    assert: typia.createAssert<typia.PascalCase<ConstantAtomicTagged>>(),
  });
