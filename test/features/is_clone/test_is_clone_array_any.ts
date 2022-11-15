import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_array_any = _test_is_clone(
    "any array",
    ArrayAny.generate,
    (input) => TSON.isClone(input),
    ArrayAny.SPOILERS,
);
