import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_json_assertStringify_DynamicArray = (): void =>
  _test_json_assertStringify(TypeGuardError)("DynamicArray")<DynamicArray>(
    DynamicArray,
  )((input) => typia.json.assertStringify<DynamicArray>(input));
