import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_notation_validateKebab_TypeTagTuple = (): void =>
  _test_notation_validateGeneral("TypeTagTuple")<TypeTagTuple>(TypeTagTuple)<
    typia.KebabCase<TypeTagTuple>
  >({
    convert: (input) => typia.notations.validateKebab<TypeTagTuple>(input),
    assert: typia.createAssert<typia.KebabCase<TypeTagTuple>>(),
  });
