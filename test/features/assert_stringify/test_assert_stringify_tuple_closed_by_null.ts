import TSON from "../../../src";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_tuple_closed_by_null =
    _test_assert_stringify(
        "tuple closed by null",
        () => [1, 3, null] as const,
        (input) => TSON.assertStringify(input),
    );
