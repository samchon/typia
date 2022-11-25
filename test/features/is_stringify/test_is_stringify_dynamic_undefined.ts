import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_dynamic_undefined = _test_is_stringify(
    "dynamic tree",
    DynamicUndefined.generate,
    (input) => TSON.isStringify(input),
    DynamicUndefined.SPOILERS,
);
