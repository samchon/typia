import typia from "typia";

import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_DynamicUndefined = _test_clone(
    "DynamicUndefined",
    DynamicUndefined.generate,
    typia.createClone<DynamicUndefined>(),
);
