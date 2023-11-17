import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_notation_validatePascal_ConstantIntersection =
  _test_notation_validateGeneral("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )<typia.PascalCase<ConstantIntersection>>({
    convert: (input) =>
      typia.notations.validatePascal<ConstantIntersection>(input),
    assert: typia.createAssert<typia.PascalCase<ConstantIntersection>>(),
  });
