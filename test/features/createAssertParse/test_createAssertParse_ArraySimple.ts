import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_createAssertParse_ArraySimple = _test_assertParse(
    "ArraySimple",
    ArraySimple.generate,
    typia.createAssertParse<ArraySimple>(),
    ArraySimple.SPOILERS,
);
