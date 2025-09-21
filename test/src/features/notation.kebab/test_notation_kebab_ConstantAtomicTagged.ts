import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_notation_validateKebab_ConstantAtomicTagged = (): void =>
  _test_notation_validateGeneral("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )<typia.KebabCase<ConstantAtomicTagged>>({
    convert: (input) =>
      typia.notations.validateKebab<ConstantAtomicTagged>(input),
    assert: typia.createAssert<typia.KebabCase<ConstantAtomicTagged>>(),
  });
