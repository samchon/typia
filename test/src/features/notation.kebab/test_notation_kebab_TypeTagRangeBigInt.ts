import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_notation_validateKebab_TypeTagRangeBigInt = (): void =>
  _test_notation_validateGeneral("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
    TypeTagRangeBigInt,
  )<typia.KebabCase<TypeTagRangeBigInt>>({
    convert: (input) =>
      typia.notations.validateKebab<TypeTagRangeBigInt>(input),
    assert: typia.createAssert<typia.KebabCase<TypeTagRangeBigInt>>(),
  });
