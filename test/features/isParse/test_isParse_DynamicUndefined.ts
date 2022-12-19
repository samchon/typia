import typia from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_DynamicUndefined = _test_isParse(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => typia.isParse<DynamicUndefined>(input),
    DynamicUndefined.SPOILERS,
);