import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_notation_validatePascal_ConstantAtomicTagged =
  _test_notation_validateGeneral("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )<typia.PascalCase<ConstantAtomicTagged>>({
    convert: (input) =>
      typia.notations.validatePascal<ConstantAtomicTagged>(input),
    assert: typia.createAssert<typia.PascalCase<ConstantAtomicTagged>>(),
  });
