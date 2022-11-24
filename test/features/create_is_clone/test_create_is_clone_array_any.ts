import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_array_any = _test_is_clone(
    "any array",
    ArrayAny.generate,
    TSON.createIsClone<ArrayAny>(),
    ArrayAny.SPOILERS,
);
