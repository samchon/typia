import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_notation_createValidateSnake_ConstantIntersection = (): void =>
    _test_notation_validateGeneral("ConstantIntersection")<ConstantIntersection>(
        ConstantIntersection
  )<typia.SnakeCase<ConstantIntersection>>({
    convert: typia.notations.createValidateSnake<ConstantIntersection>(),
    assert: typia.createAssert<typia.SnakeCase<ConstantIntersection>>(),
  });
