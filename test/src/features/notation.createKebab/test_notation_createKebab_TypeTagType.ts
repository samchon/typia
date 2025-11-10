import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_notation_createValidateKebab_TypeTagType = (): void =>
  _test_notation_validateGeneral("TypeTagType")<TypeTagType>(TypeTagType)<
    typia.KebabCase<TypeTagType>
  >({
    convert: typia.notations.createValidateKebab<TypeTagType>(),
    assert: typia.createAssert<typia.KebabCase<TypeTagType>>(),
  });
