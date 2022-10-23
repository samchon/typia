import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_is } from "./../is/_test_is";

export const test_create_is_array_union = _test_is(
    "union arrray",
    ArrayUnion.generate,
    TSON.createIs<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
