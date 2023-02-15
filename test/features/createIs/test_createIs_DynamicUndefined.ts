import typia from "typia";

import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_is } from "../internal/_test_is";

export const test_createIs_DynamicUndefined = _test_is(
    "DynamicUndefined",
    DynamicUndefined.generate,
    typia.createIs<DynamicUndefined>(),
    DynamicUndefined.SPOILERS,
);
