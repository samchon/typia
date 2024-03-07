import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicArray } from "../../structures/DynamicArray";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_DynamicArray =
  _test_json_assertStringify(TypeGuardError)("DynamicArray")<DynamicArray>(
    DynamicArray,
  )((input) => typia.json.assertStringify<DynamicArray>(input));
