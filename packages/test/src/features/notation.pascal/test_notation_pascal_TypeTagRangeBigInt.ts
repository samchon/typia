import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_notation_validatePascal_TypeTagRangeBigInt =
  _test_notation_validateGeneral("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
    TypeTagRangeBigInt,
  )<typia.PascalCase<TypeTagRangeBigInt>>({
    convert: (input) =>
      typia.notations.validatePascal<TypeTagRangeBigInt>(input),
    assert: typia.createAssert<typia.PascalCase<TypeTagRangeBigInt>>(),
  });
