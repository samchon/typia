import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_json_assertStringify_ArrayAtomicAlias =
  _test_json_assertStringify("ArrayAtomicAlias")<ArrayAtomicAlias>(
    ArrayAtomicAlias,
  )((input) => typia.json.assertStringify<ArrayAtomicAlias>(input));
