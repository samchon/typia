import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_notation_createValidateCamel_TypeTagNaN =
  _test_notation_validateGeneral("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)<
    typia.CamelCase<TypeTagNaN>
  >({
    convert: typia.notations.createValidateCamel<TypeTagNaN>(),
    assert: typia.createAssert<typia.CamelCase<TypeTagNaN>>(),
  });
