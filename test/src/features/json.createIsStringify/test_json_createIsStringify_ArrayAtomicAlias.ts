import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_json_createIsStringify_ArrayAtomicAlias = (): void =>
  _test_json_isStringify("ArrayAtomicAlias")<ArrayAtomicAlias>(
    ArrayAtomicAlias,
  )(typia.json.createIsStringify<ArrayAtomicAlias>());
