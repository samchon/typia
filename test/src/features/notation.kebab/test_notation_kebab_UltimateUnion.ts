import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_notation_validateKebab_UltimateUnion = (): void =>
  _test_notation_validateGeneral("UltimateUnion")<UltimateUnion>(UltimateUnion)<
    typia.KebabCase<UltimateUnion>
  >({
    convert: (input) => typia.notations.validateKebab<UltimateUnion>(input),
    assert: typia.createAssert<typia.KebabCase<UltimateUnion>>(),
  });
