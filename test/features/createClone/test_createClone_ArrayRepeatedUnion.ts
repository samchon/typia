import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_createClone_ArrayRepeatedUnion = _test_clone(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    typia.createClone<ArrayRepeatedUnion>(),
);
