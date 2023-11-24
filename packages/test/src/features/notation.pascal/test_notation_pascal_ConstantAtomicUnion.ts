import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_notation_validatePascal_ConstantAtomicUnion =
  _test_notation_validateGeneral("ConstantAtomicUnion")<ConstantAtomicUnion>(
    ConstantAtomicUnion,
  )<typia.PascalCase<ConstantAtomicUnion>>({
    convert: (input) =>
      typia.notations.validatePascal<ConstantAtomicUnion>(input),
    assert: typia.createAssert<typia.PascalCase<ConstantAtomicUnion>>(),
  });
