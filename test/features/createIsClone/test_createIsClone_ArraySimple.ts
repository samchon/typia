import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ArraySimple = _test_isClone(
    "ArraySimple",
    ArraySimple.generate,
    TSON.createIsClone<ArraySimple>(),
    ArraySimple.SPOILERS,
);