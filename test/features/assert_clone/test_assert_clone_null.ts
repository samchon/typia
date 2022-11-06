import TSON from "../../../src";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_null = _test_assert_clone(
    "null",
    () => null,
    (input) => TSON.assertClone(input),
);
