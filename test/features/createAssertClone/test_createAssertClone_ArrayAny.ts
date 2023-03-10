import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_createAssertClone_ArrayAny = _test_assertClone(
    "ArrayAny",
    ArrayAny.generate,
    typia.createAssertClone<ArrayAny>(),
    ArrayAny.SPOILERS,
);
