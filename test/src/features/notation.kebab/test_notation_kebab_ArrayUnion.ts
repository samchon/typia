import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_notation_validateKebab_ArrayUnion = (): void =>
  _test_notation_validateGeneral("ArrayUnion")<ArrayUnion>(ArrayUnion)<
    typia.KebabCase<ArrayUnion>
  >({
    convert: (input) => typia.notations.validateKebab<ArrayUnion>(input),
    assert: typia.createAssert<typia.KebabCase<ArrayUnion>>(),
  });
