import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_notation_validatePascal_DynamicTag =
  _test_notation_validateGeneral("DynamicTag")<DynamicTag>(DynamicTag)<
    typia.PascalCase<DynamicTag>
  >({
    convert: (input) => typia.notations.validatePascal<DynamicTag>(input),
    assert: typia.createAssert<typia.PascalCase<DynamicTag>>(),
  });
