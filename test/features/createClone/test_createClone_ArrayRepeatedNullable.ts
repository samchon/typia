import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_createClone_ArrayRepeatedNullable = _test_clone(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    typia.createClone<ArrayRepeatedNullable>(),
);
