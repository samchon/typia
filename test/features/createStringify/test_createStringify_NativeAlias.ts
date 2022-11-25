import TSON from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_NativeAlias = _test_stringify(
    "NativeAlias",
    NativeAlias.generate,
    TSON.createStringify<NativeAlias>(),
);
