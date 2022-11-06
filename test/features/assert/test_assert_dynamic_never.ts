import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_assert } from "./_test_assert";

export const test_assert_dynamic_never = _test_assert(
    "dynamic tree",
    DynamicNever.generate,
    (input) => TSON.assertType(input),
    DynamicNever.SPOILERS,
);
