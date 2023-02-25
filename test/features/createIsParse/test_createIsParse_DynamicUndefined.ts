import typia from "../../../src";

import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_DynamicUndefined = _test_isParse(
    "DynamicUndefined",
    DynamicUndefined.generate,
    typia.createIsParse<DynamicUndefined>(),
    DynamicUndefined.SPOILERS,
);
