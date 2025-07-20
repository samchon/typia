import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_json_createValidateParse_DynamicArray = (): void =>
  _test_json_validateParse("DynamicArray")<DynamicArray>(DynamicArray)(
    typia.json.createValidateParse<DynamicArray>(),
  );
