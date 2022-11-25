import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_dynamic_never = _test_assert_stringify(
    "dynamic tree",
    DynamicNever.generate,
    (input) => TSON.assertStringify(input),
    DynamicNever.SPOILERS,
);
