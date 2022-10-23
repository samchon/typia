import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_is } from "./../is/_test_is";

export const test_create_is_array_simple = _test_is(
    "simple array",
    ArraySimple.generate,
    TSON.createIs<ArraySimple>(),
    ArraySimple.SPOILERS,
);
