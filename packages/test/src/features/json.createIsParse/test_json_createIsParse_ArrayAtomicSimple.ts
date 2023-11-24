import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_json_createIsParse_ArrayAtomicSimple = _test_json_isParse(
  "ArrayAtomicSimple",
)<ArrayAtomicSimple>(ArrayAtomicSimple)(
  typia.json.createIsParse<ArrayAtomicSimple>(),
);
