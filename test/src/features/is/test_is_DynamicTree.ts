import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_is_DynamicTree = (): void => _test_is(
    "DynamicTree",
)<DynamicTree>(
    DynamicTree
)((input) => typia.is<DynamicTree>(input));
