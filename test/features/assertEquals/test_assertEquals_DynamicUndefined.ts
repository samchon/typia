import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_DynamicUndefined = _test_assertEquals(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => TSON.assertEquals(input),
);
