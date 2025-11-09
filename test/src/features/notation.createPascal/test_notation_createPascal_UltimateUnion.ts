import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_notation_createValidatePascal_UltimateUnion = (): void =>
  _test_notation_validateGeneral("UltimateUnion")<UltimateUnion>(UltimateUnion)<
    typia.PascalCase<UltimateUnion>
  >({
    convert: typia.notations.createValidatePascal<UltimateUnion>(),
    assert: typia.createAssert<typia.PascalCase<UltimateUnion>>(),
  });
