import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_notation_validatePascal_DynamicUndefined =
  _test_notation_validateGeneral("DynamicUndefined")<DynamicUndefined>(
    DynamicUndefined,
  )<typia.PascalCase<DynamicUndefined>>({
    convert: (input) => typia.notations.validatePascal<DynamicUndefined>(input),
    assert: typia.createAssert<typia.PascalCase<DynamicUndefined>>(),
  });
