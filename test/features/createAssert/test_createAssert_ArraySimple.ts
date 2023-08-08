import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_assert_ArraySimple = _test_assert(
    "ArraySimple",
    ArraySimple.generate,
    typia.createAssert<ArraySimple>(),
    ArraySimple.SPOILERS,
);
