import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_notation_validateCamel_UltimateUnion = (): void =>
  _test_notation_validateGeneral("UltimateUnion")<UltimateUnion>(UltimateUnion)<
    typia.CamelCase<UltimateUnion>
  >({
    convert: (input) => typia.notations.validateCamel<UltimateUnion>(input),
    assert: typia.createAssert<typia.CamelCase<UltimateUnion>>(),
  });
