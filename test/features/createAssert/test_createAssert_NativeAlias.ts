import TSON from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_NativeAlias = _test_assert(
    "NativeAlias",
    NativeAlias.generate,
    TSON.createAssert<NativeAlias>(),
    NativeAlias.SPOILERS,
);