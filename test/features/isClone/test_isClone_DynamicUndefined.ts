import typia from "../../../src";

import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_DynamicUndefined = _test_isClone(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => typia.isClone(input),
    DynamicUndefined.SPOILERS,
);
