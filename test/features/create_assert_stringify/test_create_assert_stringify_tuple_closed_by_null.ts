import TSON from "../../../src";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_tuple_closed_by_null =
    _test_assert_stringify(
        "tuple closed by null",
        () => [1, 3, null] as const,
        TSON.createAssertStringify<readonly [1, 3, null]>(),
    );
