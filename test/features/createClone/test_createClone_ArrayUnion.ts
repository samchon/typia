import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createClone_ArrayUnion = _test_clone(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createClone<ArrayUnion>(),
);
