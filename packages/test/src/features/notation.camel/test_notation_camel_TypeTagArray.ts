import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_notation_validateCamel_TypeTagArray =
  _test_notation_validateGeneral("TypeTagArray")<TypeTagArray>(TypeTagArray)<
    typia.CamelCase<TypeTagArray>
  >({
    convert: (input) => typia.notations.validateCamel<TypeTagArray>(input),
    assert: typia.createAssert<typia.CamelCase<TypeTagArray>>(),
  });
