import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_notation_createValidateKebab_TypeTagFormat = (): void =>
  _test_notation_validateGeneral("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)<
    typia.KebabCase<TypeTagFormat>
  >({
    convert: typia.notations.createValidateKebab<TypeTagFormat>(),
    assert: typia.createAssert<typia.KebabCase<TypeTagFormat>>(),
  });
