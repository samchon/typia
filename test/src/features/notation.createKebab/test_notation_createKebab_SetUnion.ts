import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { SetUnion } from "../../structures/SetUnion";

export const test_notation_createValidateKebab_SetUnion = (): void =>
  _test_notation_validateGeneral("SetUnion")<SetUnion>(SetUnion)<
    typia.KebabCase<SetUnion>
  >({
    convert: typia.notations.createValidateKebab<SetUnion>(),
    assert: typia.createAssert<typia.KebabCase<SetUnion>>(),
  });
