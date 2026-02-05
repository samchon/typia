import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_notation_validateKebab_TypeTagFormat = (): void =>
  _test_notation_validateGeneral("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)<
    typia.KebabCase<TypeTagFormat>
  >({
    convert: (input) => typia.notations.validateKebab<TypeTagFormat>(input),
    assert: typia.createAssert<typia.KebabCase<TypeTagFormat>>(),
  });
