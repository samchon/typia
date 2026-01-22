import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_notation_validateSnake_ConstantIntersection = (): void =>
  _test_notation_validateGeneral("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )<typia.SnakeCase<ConstantIntersection>>({
    convert: (input) =>
      typia.notations.validateSnake<ConstantIntersection>(input),
    assert: typia.createAssert<typia.SnakeCase<ConstantIntersection>>(),
  });
