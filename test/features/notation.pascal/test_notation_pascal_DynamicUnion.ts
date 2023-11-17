import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_notation_validatePascal_DynamicUnion =
  _test_notation_validateGeneral("DynamicUnion")<DynamicUnion>(DynamicUnion)<
    typia.PascalCase<DynamicUnion>
  >({
    convert: (input) => typia.notations.validatePascal<DynamicUnion>(input),
    assert: typia.createAssert<typia.PascalCase<DynamicUnion>>(),
  });
