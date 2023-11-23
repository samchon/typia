import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_notation_createValidateCamel_DynamicArray =
  _test_notation_validateGeneral("DynamicArray")<DynamicArray>(DynamicArray)<
    typia.CamelCase<DynamicArray>
  >({
    convert: typia.notations.createValidateCamel<DynamicArray>(),
    assert: typia.createAssert<typia.CamelCase<DynamicArray>>(),
  });
