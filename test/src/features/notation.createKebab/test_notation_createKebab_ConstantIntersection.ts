import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_notation_createValidateKebab_ConstantIntersection =
  (): void =>
    _test_notation_validateGeneral(
      "ConstantIntersection",
    )<ConstantIntersection>(ConstantIntersection)<
      typia.KebabCase<ConstantIntersection>
    >({
      convert: typia.notations.createValidateKebab<ConstantIntersection>(),
      assert: typia.createAssert<typia.KebabCase<ConstantIntersection>>(),
    });
