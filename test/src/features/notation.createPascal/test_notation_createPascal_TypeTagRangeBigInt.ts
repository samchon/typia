import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_notation_createValidatePascal_TypeTagRangeBigInt = (): void =>
  _test_notation_validateGeneral("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
    TypeTagRangeBigInt,
  )<typia.PascalCase<TypeTagRangeBigInt>>({
    convert: typia.notations.createValidatePascal<TypeTagRangeBigInt>(),
    assert: typia.createAssert<typia.PascalCase<TypeTagRangeBigInt>>(),
  });
