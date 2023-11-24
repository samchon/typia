import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_notation_validateSnake_InstanceUnion =
  _test_notation_validateGeneral("InstanceUnion")<InstanceUnion>(InstanceUnion)<
    typia.SnakeCase<InstanceUnion>
  >({
    convert: (input) => typia.notations.validateSnake<InstanceUnion>(input),
    assert: typia.createAssert<typia.SnakeCase<InstanceUnion>>(),
  });
