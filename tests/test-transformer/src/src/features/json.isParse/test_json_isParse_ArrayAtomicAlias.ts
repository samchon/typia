import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_json_isParse_ArrayAtomicAlias = (): void => _test_json_isParse(
    "ArrayAtomicAlias",
)<ArrayAtomicAlias>(
    ArrayAtomicAlias
)((input) => typia.json.isParse<ArrayAtomicAlias>(input));
