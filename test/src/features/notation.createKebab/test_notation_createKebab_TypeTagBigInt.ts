import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_notation_createValidateKebab_TypeTagBigInt = (): void =>
  _test_notation_validateGeneral("TypeTagBigInt")<TypeTagBigInt>(TypeTagBigInt)<
    typia.KebabCase<TypeTagBigInt>
  >({
    convert: typia.notations.createValidateKebab<TypeTagBigInt>(),
    assert: typia.createAssert<typia.KebabCase<TypeTagBigInt>>(),
  });
