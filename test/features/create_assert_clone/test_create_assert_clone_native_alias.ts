import TSON from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_native_alias = _test_assert_clone(
    "aliased native",
    NativeAlias.generate,
    TSON.createAssertClone<NativeAlias>(),
    NativeAlias.SPOILERS,
);
