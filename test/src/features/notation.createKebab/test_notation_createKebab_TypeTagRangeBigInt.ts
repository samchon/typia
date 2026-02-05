import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_notation_createValidateKebab_TypeTagRangeBigInt = (): void =>
  _test_notation_validateGeneral("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
    TypeTagRangeBigInt,
  )<typia.KebabCase<TypeTagRangeBigInt>>({
    convert: typia.notations.createValidateKebab<TypeTagRangeBigInt>(),
    assert: typia.createAssert<typia.KebabCase<TypeTagRangeBigInt>>(),
  });
