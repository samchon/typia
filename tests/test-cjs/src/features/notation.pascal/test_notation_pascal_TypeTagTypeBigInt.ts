import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_notation_validatePascal_TypeTagTypeBigInt = (): void =>
  _test_notation_validateGeneral("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
    TypeTagTypeBigInt,
  )<typia.PascalCase<TypeTagTypeBigInt>>({
    convert: (input) =>
      typia.notations.validatePascal<TypeTagTypeBigInt>(input),
    assert: typia.createAssert<typia.PascalCase<TypeTagTypeBigInt>>(),
  });
