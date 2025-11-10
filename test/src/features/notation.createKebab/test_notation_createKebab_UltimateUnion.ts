import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_notation_createValidateKebab_UltimateUnion = (): void =>
  _test_notation_validateGeneral("UltimateUnion")<UltimateUnion>(UltimateUnion)<
    typia.KebabCase<UltimateUnion>
  >({
    convert: typia.notations.createValidateKebab<UltimateUnion>(),
    assert: typia.createAssert<typia.KebabCase<UltimateUnion>>(),
  });
