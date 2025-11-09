import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { SetUnion } from "../../structures/SetUnion";

export const test_notation_validatePascal_SetUnion = (): void =>
  _test_notation_validateGeneral("SetUnion")<SetUnion>(SetUnion)<
    typia.PascalCase<SetUnion>
  >({
    convert: (input) => typia.notations.validatePascal<SetUnion>(input),
    assert: typia.createAssert<typia.PascalCase<SetUnion>>(),
  });
