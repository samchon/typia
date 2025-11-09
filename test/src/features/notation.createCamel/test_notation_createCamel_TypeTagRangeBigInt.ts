import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_notation_createValidateCamel_TypeTagRangeBigInt = (): void =>
  _test_notation_validateGeneral("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
    TypeTagRangeBigInt,
  )<typia.CamelCase<TypeTagRangeBigInt>>({
    convert: typia.notations.createValidateCamel<TypeTagRangeBigInt>(),
    assert: typia.createAssert<typia.CamelCase<TypeTagRangeBigInt>>(),
  });
