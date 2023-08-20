import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_assertClone_DynamicUndefined = _test_assertClone(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => typia.assertClone<DynamicUndefined>(input),
    DynamicUndefined.SPOILERS,
);
