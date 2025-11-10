import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_notation_validateKebab_TypeTagNaN = (): void =>
  _test_notation_validateGeneral("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)<
    typia.KebabCase<TypeTagNaN>
  >({
    convert: (input) => typia.notations.validateKebab<TypeTagNaN>(input),
    assert: typia.createAssert<typia.KebabCase<TypeTagNaN>>(),
  });
