import TSON from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_native_alias = _test_assert_stringify(
    "aliased native",
    NativeAlias.generate,
    TSON.createAssertStringify<NativeAlias>(),
    NativeAlias.SPOILERS,
);
