import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_notation_createValidatePascal_TypeTagFormat =
  _test_notation_validateGeneral("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)<
    typia.PascalCase<TypeTagFormat>
  >({
    convert: typia.notations.createValidatePascal<TypeTagFormat>(),
    assert: typia.createAssert<typia.PascalCase<TypeTagFormat>>(),
  });
