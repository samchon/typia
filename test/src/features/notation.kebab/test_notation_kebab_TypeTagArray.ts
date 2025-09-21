import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_notation_validateKebab_TypeTagArray = (): void =>
  _test_notation_validateGeneral("TypeTagArray")<TypeTagArray>(TypeTagArray)<
    typia.KebabCase<TypeTagArray>
  >({
    convert: (input) => typia.notations.validateKebab<TypeTagArray>(input),
    assert: typia.createAssert<typia.KebabCase<TypeTagArray>>(),
  });
