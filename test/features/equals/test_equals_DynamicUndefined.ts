import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_DynamicUndefined = _test_equals(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => TSON.equals(input),
);
