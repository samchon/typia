import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_notation_validatePascal_DynamicArray =
  _test_notation_validateGeneral("DynamicArray")<DynamicArray>(DynamicArray)<
    typia.PascalCase<DynamicArray>
  >({
    convert: (input) => typia.notations.validatePascal<DynamicArray>(input),
    assert: typia.createAssert<typia.PascalCase<DynamicArray>>(),
  });
