import typia from "typia";

import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_DynamicUndefined = _test_validateClone(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => typia.validateClone(input),
    DynamicUndefined.SPOILERS,
);
