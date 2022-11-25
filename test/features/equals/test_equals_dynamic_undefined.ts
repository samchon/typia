import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_dynamic_undefined = _test_equals(
    "dynamic tree",
    DynamicUndefined.generate,
    (input) => TSON.equals(input),
);
