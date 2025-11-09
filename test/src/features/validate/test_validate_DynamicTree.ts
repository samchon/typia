import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_validate_DynamicTree = (): void => _test_validate(
    "DynamicTree",
)<DynamicTree>(
    DynamicTree
)((input) => typia.validate<DynamicTree>(input));
