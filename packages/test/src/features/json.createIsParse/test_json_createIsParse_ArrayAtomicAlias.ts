import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_json_createIsParse_ArrayAtomicAlias = _test_json_isParse(
  "ArrayAtomicAlias",
)<ArrayAtomicAlias>(ArrayAtomicAlias)(
  typia.json.createIsParse<ArrayAtomicAlias>(),
);
