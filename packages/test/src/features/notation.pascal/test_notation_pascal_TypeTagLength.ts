import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_notation_validatePascal_TypeTagLength =
  _test_notation_validateGeneral("TypeTagLength")<TypeTagLength>(TypeTagLength)<
    typia.PascalCase<TypeTagLength>
  >({
    convert: (input) => typia.notations.validatePascal<TypeTagLength>(input),
    assert: typia.createAssert<typia.PascalCase<TypeTagLength>>(),
  });
