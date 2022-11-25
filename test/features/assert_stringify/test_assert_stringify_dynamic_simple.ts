import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_dynamic_simple = _test_assert_stringify(
    "dynamic simple",
    DynamicSimple.generate,
    (input) => TSON.assertStringify(input),
    DynamicSimple.SPOILERS,
);
