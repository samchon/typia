import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_is_DynamicTag = (): void => _test_is(
    "DynamicTag",
)<DynamicTag>(
    DynamicTag
)((input) => typia.is<DynamicTag>(input));
