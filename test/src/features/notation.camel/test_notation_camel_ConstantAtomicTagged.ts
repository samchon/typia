import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_notation_validateCamel_ConstantAtomicTagged =
  _test_notation_validateGeneral("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )<typia.CamelCase<ConstantAtomicTagged>>({
    convert: (input) =>
      typia.notations.validateCamel<ConstantAtomicTagged>(input),
    assert: typia.createAssert<typia.CamelCase<ConstantAtomicTagged>>(),
  });
