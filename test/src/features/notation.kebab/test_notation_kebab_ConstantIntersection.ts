import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_notation_validateKebab_ConstantIntersection = (): void =>
  _test_notation_validateGeneral("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )<typia.KebabCase<ConstantIntersection>>({
    convert: (input) =>
      typia.notations.validateKebab<ConstantIntersection>(input),
    assert: typia.createAssert<typia.KebabCase<ConstantIntersection>>(),
  });
