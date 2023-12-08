import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_notation_validateCamel_TypeTagBigInt =
  _test_notation_validateGeneral("TypeTagBigInt")<TypeTagBigInt>(TypeTagBigInt)<
    typia.CamelCase<TypeTagBigInt>
  >({
    convert: (input) => typia.notations.validateCamel<TypeTagBigInt>(input),
    assert: typia.createAssert<typia.CamelCase<TypeTagBigInt>>(),
  });
