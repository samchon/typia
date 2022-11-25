import TSON from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_native_alias = _test_clone(
    "aliased native",
    NativeAlias.generate,
    TSON.createClone<NativeAlias>(),
);
