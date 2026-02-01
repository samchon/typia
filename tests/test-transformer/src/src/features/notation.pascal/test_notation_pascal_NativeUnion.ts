import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_notation_validatePascal_NativeUnion = (): void =>
    _test_notation_validateGeneral("NativeUnion")<NativeUnion>(
        NativeUnion
  )<typia.PascalCase<NativeUnion>>({
    convert: (input) => typia.notations.validatePascal<NativeUnion>(input),
    assert: typia.createAssert<typia.PascalCase<NativeUnion>>(),
  });
