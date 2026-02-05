import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_notation_createValidateKebab_ConstantAtomicUnion = (): void =>
  _test_notation_validateGeneral("ConstantAtomicUnion")<ConstantAtomicUnion>(
    ConstantAtomicUnion,
  )<typia.KebabCase<ConstantAtomicUnion>>({
    convert: typia.notations.createValidateKebab<ConstantAtomicUnion>(),
    assert: typia.createAssert<typia.KebabCase<ConstantAtomicUnion>>(),
  });
