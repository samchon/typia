import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_dynamic_undefined = _test_assert_stringify(
    "dynamic tree",
    DynamicUndefined.generate,
    (input) => TSON.assertStringify(input),
    DynamicUndefined.SPOILERS,
);
