import TSON from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_NativeSimple = _test_validate(
    "NativeSimple",
    NativeSimple.generate,
    (input) => TSON.validate(input),
    NativeSimple.SPOILERS,
);