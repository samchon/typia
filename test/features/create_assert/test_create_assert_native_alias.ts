import TSON from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_assert } from "../internal/_test_assert";

export const test_create_assert_native_alias = _test_assert(
    "aliased native",
    NativeAlias.generate,
    TSON.createAssert<NativeAlias>(),
    NativeAlias.SPOILERS,
);
