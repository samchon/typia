import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_json_assertParseCustom_DynamicArray = (): void =>
  _test_json_assertParse(CustomGuardError)("DynamicArray")<DynamicArray>(
    DynamicArray,
  )((input) =>
    typia.json.assertParse<DynamicArray>(input, (p) => new CustomGuardError(p)),
  );
