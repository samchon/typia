import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_notation_createValidateKebab_TypeTagArray = (): void =>
  _test_notation_validateGeneral("TypeTagArray")<TypeTagArray>(TypeTagArray)<
    typia.KebabCase<TypeTagArray>
  >({
    convert: typia.notations.createValidateKebab<TypeTagArray>(),
    assert: typia.createAssert<typia.KebabCase<TypeTagArray>>(),
  });
