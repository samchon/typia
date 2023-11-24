import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_notation_validateCamel_DynamicArray =
  _test_notation_validateGeneral("DynamicArray")<DynamicArray>(DynamicArray)<
    typia.CamelCase<DynamicArray>
  >({
    convert: (input) => typia.notations.validateCamel<DynamicArray>(input),
    assert: typia.createAssert<typia.CamelCase<DynamicArray>>(),
  });
