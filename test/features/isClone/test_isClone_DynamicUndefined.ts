import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_isClone_DynamicUndefined = _test_isClone(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => typia.isClone<DynamicUndefined>(input),
    DynamicUndefined.SPOILERS,
);
