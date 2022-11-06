import TSON from "../../../src";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_null = _test_assert_clone(
    "null",
    () => null,
    TSON.createAssertClone<null>(),
);
