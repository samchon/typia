import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_createValidateEquals_ConstantIntersection = (): void =>
  _test_validateEquals("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )(typia.createValidateEquals<ConstantIntersection>());
