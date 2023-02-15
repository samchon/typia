import typia from "typia";

import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_DynamicUndefined = _test_assertClone(
    "DynamicUndefined",
    DynamicUndefined.generate,
    typia.createAssertClone<DynamicUndefined>(),
    DynamicUndefined.SPOILERS,
);
