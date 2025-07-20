import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_json_createAssertStringifyCustom_DynamicArray = (): void =>
  _test_json_assertStringify(CustomGuardError)("DynamicArray")<DynamicArray>(
    DynamicArray,
  )(
    typia.json.createAssertStringify<DynamicArray>(
      (p) => new CustomGuardError(p),
    ),
  );
