import TSON from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_validate_equals_native_union = _test_validate_equals(
    "union native",
    NativeUnion.generate,
    (input) => TSON.validateEquals(input),
    false,
);
