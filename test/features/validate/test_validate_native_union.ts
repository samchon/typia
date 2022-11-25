import TSON from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_native_union = _test_validate(
    "union native",
    NativeUnion.generate,
    (input) => TSON.validate(input),
    NativeUnion.SPOILERS,
);
