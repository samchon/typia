import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_clone_ArrayUnion = _test_clone(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.clone(input),
);
