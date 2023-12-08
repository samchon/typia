import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_notation_validatePascal_TypeTagArray =
  _test_notation_validateGeneral("TypeTagArray")<TypeTagArray>(TypeTagArray)<
    typia.PascalCase<TypeTagArray>
  >({
    convert: (input) => typia.notations.validatePascal<TypeTagArray>(input),
    assert: typia.createAssert<typia.PascalCase<TypeTagArray>>(),
  });
