import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_notation_createValidatePascal_ArrayRepeatedRequired =
  _test_notation_validateGeneral(
    "ArrayRepeatedRequired",
  )<ArrayRepeatedRequired>(ArrayRepeatedRequired)<
    typia.PascalCase<ArrayRepeatedRequired>
  >({
    convert: typia.notations.createValidatePascal<ArrayRepeatedRequired>(),
    assert: typia.createAssert<typia.PascalCase<ArrayRepeatedRequired>>(),
  });
