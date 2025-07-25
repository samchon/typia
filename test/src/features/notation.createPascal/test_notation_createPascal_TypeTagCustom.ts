import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_notation_createValidatePascal_TypeTagCustom = (): void =>
  _test_notation_validateGeneral("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)<
    typia.PascalCase<TypeTagCustom>
  >({
    convert: typia.notations.createValidatePascal<TypeTagCustom>(),
    assert: typia.createAssert<typia.PascalCase<TypeTagCustom>>(),
  });
