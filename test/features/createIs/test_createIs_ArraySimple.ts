import typia from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ArraySimple = _test_is(
    "ArraySimple",
    ArraySimple.generate,
    typia.createIs<ArraySimple>(),
    ArraySimple.SPOILERS,
);
