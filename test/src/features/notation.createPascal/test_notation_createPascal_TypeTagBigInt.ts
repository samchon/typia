import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_notation_createValidatePascal_TypeTagBigInt = (): void =>
    _test_notation_validateGeneral("TypeTagBigInt")<TypeTagBigInt>(
        TypeTagBigInt
  )<typia.PascalCase<TypeTagBigInt>>({
    convert: typia.notations.createValidatePascal<TypeTagBigInt>(),
    assert: typia.createAssert<typia.PascalCase<TypeTagBigInt>>(),
  });
