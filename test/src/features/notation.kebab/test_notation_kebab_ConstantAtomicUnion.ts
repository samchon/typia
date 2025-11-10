import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_notation_validateKebab_ConstantAtomicUnion = (): void =>
  _test_notation_validateGeneral("ConstantAtomicUnion")<ConstantAtomicUnion>(
    ConstantAtomicUnion,
  )<typia.KebabCase<ConstantAtomicUnion>>({
    convert: (input) =>
      typia.notations.validateKebab<ConstantAtomicUnion>(input),
    assert: typia.createAssert<typia.KebabCase<ConstantAtomicUnion>>(),
  });
