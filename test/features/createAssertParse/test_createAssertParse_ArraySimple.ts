import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ArraySimple = _test_assertParse(
    "ArraySimple",
    ArraySimple.generate,
    TSON.createAssertParse<ArraySimple>(),
    ArraySimple.SPOILERS,
);
