import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_notation_createValidateCamel_UltimateUnion =
  _test_notation_validateGeneral("UltimateUnion")<UltimateUnion>(UltimateUnion)<
    typia.CamelCase<UltimateUnion>
  >({
    convert: typia.notations.createValidateCamel<UltimateUnion>(),
    assert: typia.createAssert<typia.CamelCase<UltimateUnion>>(),
  });
