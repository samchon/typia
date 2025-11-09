import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_json_validateStringify_ArrayAtomicAlias = (): void =>
  _test_json_validateStringify("ArrayAtomicAlias")<ArrayAtomicAlias>(
    ArrayAtomicAlias,
  )((input) => typia.json.validateStringify<ArrayAtomicAlias>(input));
