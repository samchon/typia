import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ArraySimple = _test_isParse(
    "ArraySimple",
    ArraySimple.generate,
    TSON.createIsParse<ArraySimple>(),
    ArraySimple.SPOILERS,
);
