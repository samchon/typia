import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_createAssert_ArrayRepeatedUnion = _test_assert(
    "ArrayRepeatedUnion",
)<ArrayRepeatedUnion>(ArrayRepeatedUnion)(
    typia.createAssert<ArrayRepeatedUnion>(),
);
