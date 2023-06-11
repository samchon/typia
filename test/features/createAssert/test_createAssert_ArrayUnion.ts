import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createAssert_ArrayUnion = _test_assert(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createAssert<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
