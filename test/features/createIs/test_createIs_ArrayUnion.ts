import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ArrayUnion = _test_is(
    "ArrayUnion",
    ArrayUnion.generate,
    TSON.createIs<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
