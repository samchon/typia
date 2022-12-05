import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ArrayAny = _test_assertParse(
    "ArrayAny",
    ArrayAny.generate,
    TSON.createAssertParse<ArrayAny>(),
    ArrayAny.SPOILERS,
);
