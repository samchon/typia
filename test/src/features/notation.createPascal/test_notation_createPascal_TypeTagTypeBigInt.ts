import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_notation_createValidatePascal_TypeTagTypeBigInt = (): void =>
  _test_notation_validateGeneral("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
    TypeTagTypeBigInt,
  )<typia.PascalCase<TypeTagTypeBigInt>>({
    convert: typia.notations.createValidatePascal<TypeTagTypeBigInt>(),
    assert: typia.createAssert<typia.PascalCase<TypeTagTypeBigInt>>(),
  });
