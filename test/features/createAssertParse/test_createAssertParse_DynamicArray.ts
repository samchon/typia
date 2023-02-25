import typia from "../../../src";

import { DynamicArray } from "../../structures/DynamicArray";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_DynamicArray = _test_assertParse(
    "DynamicArray",
    DynamicArray.generate,
    typia.createAssertParse<DynamicArray>(),
    DynamicArray.SPOILERS,
);
