import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_notation_validateKebab_TypeTagRange = (): void =>
  _test_notation_validateGeneral("TypeTagRange")<TypeTagRange>(TypeTagRange)<
    typia.KebabCase<TypeTagRange>
  >({
    convert: (input) => typia.notations.validateKebab<TypeTagRange>(input),
    assert: typia.createAssert<typia.KebabCase<TypeTagRange>>(),
  });
