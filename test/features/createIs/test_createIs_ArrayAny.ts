import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ArrayAny = _test_is(
    "ArrayAny",
    ArrayAny.generate,
    TSON.createIs<ArrayAny>(),
    ArrayAny.SPOILERS,
);
