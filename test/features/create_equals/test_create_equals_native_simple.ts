import TSON from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_equals } from "../internal/_test_equals";

export const test_create_equals_native_simple = _test_equals(
    "simple native",
    NativeSimple.generate,
    TSON.createEquals<NativeSimple>(),
);
