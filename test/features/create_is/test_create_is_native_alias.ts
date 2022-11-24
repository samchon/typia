import TSON from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_is } from "../internal/_test_is";

export const test_create_is_native_alias = _test_is(
    "aliased native",
    NativeAlias.generate,
    TSON.createIs<NativeAlias>(),
    NativeAlias.SPOILERS(),
);
