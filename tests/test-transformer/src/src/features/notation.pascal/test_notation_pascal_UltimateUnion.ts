import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_notation_validatePascal_UltimateUnion = (): void =>
    _test_notation_validateGeneral("UltimateUnion")<UltimateUnion>(
        UltimateUnion
  )<typia.PascalCase<UltimateUnion>>({
    convert: (input) => typia.notations.validatePascal<UltimateUnion>(input),
    assert: typia.createAssert<typia.PascalCase<UltimateUnion>>(),
  });
