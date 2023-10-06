import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_assert_DynamicJsonValue = _test_assert(
    "DynamicJsonValue",
)<DynamicJsonValue>(
    DynamicJsonValue
)((input) => typia.assert<DynamicJsonValue>(input));
