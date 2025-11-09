import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { SetUnion } from "../../structures/SetUnion";

export const test_notation_createValidatePascal_SetUnion = (): void =>
    _test_notation_validateGeneral("SetUnion")<SetUnion>(
        SetUnion
  )<typia.PascalCase<SetUnion>>({
    convert: typia.notations.createValidatePascal<SetUnion>(),
    assert: typia.createAssert<typia.PascalCase<SetUnion>>(),
  });
