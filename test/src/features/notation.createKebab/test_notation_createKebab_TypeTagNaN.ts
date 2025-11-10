import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_notation_createValidateKebab_TypeTagNaN = (): void =>
  _test_notation_validateGeneral("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)<
    typia.KebabCase<TypeTagNaN>
  >({
    convert: typia.notations.createValidateKebab<TypeTagNaN>(),
    assert: typia.createAssert<typia.KebabCase<TypeTagNaN>>(),
  });
