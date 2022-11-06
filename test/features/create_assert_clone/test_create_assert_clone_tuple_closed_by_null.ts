import TSON from "../../../src";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_tuple_closed_by_null =
    _test_assert_clone(
        "tuple closed by null",
        () => [1, 3, null] as const,
        TSON.createAssertClone<readonly [1, 3, null]>(),
    );
