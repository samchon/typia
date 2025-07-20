import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_json_createAssertParseCustom_DynamicArray = (): void =>
  _test_json_assertParse(CustomGuardError)("DynamicArray")<DynamicArray>(
    DynamicArray,
  )(typia.json.createAssertParse<DynamicArray>((p) => new CustomGuardError(p)));
