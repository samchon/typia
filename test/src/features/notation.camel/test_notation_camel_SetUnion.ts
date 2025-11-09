import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { SetUnion } from "../../structures/SetUnion";

export const test_notation_validateCamel_SetUnion = (): void =>
  _test_notation_validateGeneral("SetUnion")<SetUnion>(SetUnion)<
    typia.CamelCase<SetUnion>
  >({
    convert: (input) => typia.notations.validateCamel<SetUnion>(input),
    assert: typia.createAssert<typia.CamelCase<SetUnion>>(),
  });
