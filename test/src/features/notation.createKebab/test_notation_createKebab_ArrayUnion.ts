import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_notation_createValidateKebab_ArrayUnion = (): void =>
  _test_notation_validateGeneral("ArrayUnion")<ArrayUnion>(ArrayUnion)<
    typia.KebabCase<ArrayUnion>
  >({
    convert: typia.notations.createValidateKebab<ArrayUnion>(),
    assert: typia.createAssert<typia.KebabCase<ArrayUnion>>(),
  });
