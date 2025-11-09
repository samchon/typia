import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_notation_validateSnake_UltimateUnion = (): void =>
    _test_notation_validateGeneral("UltimateUnion")<UltimateUnion>(
        UltimateUnion
  )<typia.SnakeCase<UltimateUnion>>({
    convert: (input) => typia.notations.validateSnake<UltimateUnion>(input),
    assert: typia.createAssert<typia.SnakeCase<UltimateUnion>>(),
  });
