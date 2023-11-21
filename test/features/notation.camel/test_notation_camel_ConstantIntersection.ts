import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_notation_validateCamel_ConstantIntersection =
  _test_notation_validateGeneral("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )<typia.CamelCase<ConstantIntersection>>({
    convert: (input) =>
      typia.notations.validateCamel<ConstantIntersection>(input),
    assert: typia.createAssert<typia.CamelCase<ConstantIntersection>>(),
  });
