import TSON from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_is } from "../internal/_test_is";

export const test_createIs_NativeAlias = _test_is(
    "NativeAlias",
    NativeAlias.generate,
    TSON.createIs<NativeAlias>(),
    NativeAlias.SPOILERS,
);
