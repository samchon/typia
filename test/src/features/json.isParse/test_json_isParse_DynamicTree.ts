import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_json_isParse_DynamicTree = (): void => _test_json_isParse(
    "DynamicTree",
)<DynamicTree>(
    DynamicTree
)((input) => typia.json.isParse<DynamicTree>(input));
