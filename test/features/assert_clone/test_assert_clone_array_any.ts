import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_array_any = _test_assert_clone(
    "any array",
    ArrayAny.generate,
    (input) => TSON.assertClone(input),
    ArrayAny.SPOILERS,
);
