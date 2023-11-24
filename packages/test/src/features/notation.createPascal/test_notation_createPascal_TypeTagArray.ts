import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_notation_createValidatePascal_TypeTagArray =
  _test_notation_validateGeneral("TypeTagArray")<TypeTagArray>(TypeTagArray)<
    typia.PascalCase<TypeTagArray>
  >({
    convert: typia.notations.createValidatePascal<TypeTagArray>(),
    assert: typia.createAssert<typia.PascalCase<TypeTagArray>>(),
  });
