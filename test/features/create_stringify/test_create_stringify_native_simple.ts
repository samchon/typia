import TSON from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_create_stringify_native_simple = _test_stringify(
    "simple native",
    NativeSimple.generate,
    TSON.createStringify<NativeSimple>(),
);
