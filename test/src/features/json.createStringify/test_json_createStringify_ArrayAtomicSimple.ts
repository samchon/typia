import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_json_createStringify_ArrayAtomicSimple = (): void =>
  _test_json_stringify("ArrayAtomicSimple")<ArrayAtomicSimple>(
    ArrayAtomicSimple,
  )(typia.json.createStringify<ArrayAtomicSimple>());
