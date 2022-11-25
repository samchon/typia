import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_is } from "../internal/_test_is";

export const test_is_dynamic_undefined = _test_is(
    "dynamic tree",
    DynamicUndefined.generate,
    (input) => TSON.is(input),
    DynamicUndefined.SPOILERS,
);
