import TSON from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_native_simple = _test_is_stringify(
    "simple native",
    NativeSimple.generate,
    TSON.createIsStringify<NativeSimple>(),
    NativeSimple.SPOILERS,
);
