import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_notation_validateKebab_TypeTagLength = (): void =>
  _test_notation_validateGeneral("TypeTagLength")<TypeTagLength>(TypeTagLength)<
    typia.KebabCase<TypeTagLength>
  >({
    convert: (input) => typia.notations.validateKebab<TypeTagLength>(input),
    assert: typia.createAssert<typia.KebabCase<TypeTagLength>>(),
  });
