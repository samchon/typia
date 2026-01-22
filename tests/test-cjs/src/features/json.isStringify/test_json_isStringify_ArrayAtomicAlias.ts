import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_json_isStringify_ArrayAtomicAlias = (): void =>
  _test_json_isStringify("ArrayAtomicAlias")<ArrayAtomicAlias>(
    ArrayAtomicAlias,
  )((input) => typia.json.isStringify<ArrayAtomicAlias>(input));
