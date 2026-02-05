import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_notation_validateKebab_TypeTagType = (): void =>
  _test_notation_validateGeneral("TypeTagType")<TypeTagType>(TypeTagType)<
    typia.KebabCase<TypeTagType>
  >({
    convert: (input) => typia.notations.validateKebab<TypeTagType>(input),
    assert: typia.createAssert<typia.KebabCase<TypeTagType>>(),
  });
