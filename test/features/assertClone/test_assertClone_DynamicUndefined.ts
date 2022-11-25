import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_DynamicUndefined = _test_assertClone(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => TSON.assertClone(input),
    DynamicUndefined.SPOILERS,
);