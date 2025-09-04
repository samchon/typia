import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_notation_validateCamel_TypeTagNaN = (): void =>
  _test_notation_validateGeneral("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)<
    typia.CamelCase<TypeTagNaN>
  >({
    convert: (input) => typia.notations.validateCamel<TypeTagNaN>(input),
    assert: typia.createAssert<typia.CamelCase<TypeTagNaN>>(),
  });
