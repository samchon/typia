import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_json_createValidateStringify_ArrayAtomicSimple =
  _test_json_validateStringify("ArrayAtomicSimple")<ArrayAtomicSimple>(
    ArrayAtomicSimple,
  )(typia.json.createValidateStringify<ArrayAtomicSimple>());
