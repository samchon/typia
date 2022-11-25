import TSON from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_stringify } from "../internal/_test_stringify";

export const test_create_stringify_native_alias = _test_stringify(
    "aliased native",
    NativeAlias.generate,
    TSON.createStringify<NativeAlias>(),
);
