import TSON from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_assert_equals_native_alias = _test_assert_equals(
    "aliased native",
    NativeAlias.generate,
    (input) => TSON.assertEquals(input),
    false,
);
