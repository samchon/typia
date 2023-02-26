import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_createAssertParse_ArrayAny = _test_assertParse(
    "ArrayAny",
    ArrayAny.generate,
    typia.createAssertParse<ArrayAny>(),
    ArrayAny.SPOILERS,
);
