import TSON from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_native_simple = _test_validate(
    "simple native",
    NativeSimple.generate,
    TSON.createValidate<NativeSimple>(),
    NativeSimple.SPOILERS,
);
