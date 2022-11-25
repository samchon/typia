import TSON from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_native_alias = _test_is_clone(
    "aliased native",
    NativeAlias.generate,
    TSON.createIsClone<NativeAlias>(),
    NativeAlias.SPOILERS,
);
