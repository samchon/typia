import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_array_simple = _test_is_clone(
    "simple array",
    ArraySimple.generate,
    TSON.createIsClone<ArraySimple>(),
    ArraySimple.SPOILERS,
);
