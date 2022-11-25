import TSON from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_NativeSimple = _test_validate(
    "NativeSimple",
    NativeSimple.generate,
    TSON.createValidate<NativeSimple>(),
    NativeSimple.SPOILERS,
);