import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_notation_createValidateKebab_TypeTagRange = (): void =>
  _test_notation_validateGeneral("TypeTagRange")<TypeTagRange>(TypeTagRange)<
    typia.KebabCase<TypeTagRange>
  >({
    convert: typia.notations.createValidateKebab<TypeTagRange>(),
    assert: typia.createAssert<typia.KebabCase<TypeTagRange>>(),
  });
