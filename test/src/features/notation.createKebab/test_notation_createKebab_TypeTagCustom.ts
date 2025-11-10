import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_notation_createValidateKebab_TypeTagCustom = (): void =>
  _test_notation_validateGeneral("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)<
    typia.KebabCase<TypeTagCustom>
  >({
    convert: typia.notations.createValidateKebab<TypeTagCustom>(),
    assert: typia.createAssert<typia.KebabCase<TypeTagCustom>>(),
  });
