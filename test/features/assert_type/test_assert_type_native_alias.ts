import TSON from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_native_alias = _test_assert_type(
    "aliased native",
    NativeAlias.generate,
    (input) => TSON.assertType(input),
    NativeAlias.SPOILERS,
);
