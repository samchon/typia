import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_create_assert_equals_dynamic_simple = _test_assert_equals(
    "dynamic simple",
    DynamicSimple.generate,
    TSON.createAssertEquals<DynamicSimple>(),
    false,
);
