import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { SetUnion } from "../../structures/SetUnion";

export const test_notation_validateKebab_SetUnion = (): void =>
  _test_notation_validateGeneral("SetUnion")<SetUnion>(SetUnion)<
    typia.KebabCase<SetUnion>
  >({
    convert: (input) => typia.notations.validateKebab<SetUnion>(input),
    assert: typia.createAssert<typia.KebabCase<SetUnion>>(),
  });
