import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_notation_createValidatePascal_DynamicArray =
  _test_notation_validateGeneral("DynamicArray")<DynamicArray>(DynamicArray)<
    typia.PascalCase<DynamicArray>
  >({
    convert: typia.notations.createValidatePascal<DynamicArray>(),
    assert: typia.createAssert<typia.PascalCase<DynamicArray>>(),
  });
