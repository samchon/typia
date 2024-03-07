import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicArray } from "../../structures/DynamicArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_DynamicArray =
  _test_json_assertParse(CustomGuardError)("DynamicArray")<DynamicArray>(
    DynamicArray,
  )(typia.json.createAssertParse<DynamicArray>((p) => new CustomGuardError(p)));
