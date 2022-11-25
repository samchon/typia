import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_dynamic_never = _test_assert_type(
    "dynamic tree",
    DynamicNever.generate,
    (input) => TSON.assertType(input),
    DynamicNever.SPOILERS,
);
