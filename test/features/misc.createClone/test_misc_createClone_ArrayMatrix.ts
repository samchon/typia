import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_misc_clone_ArrayMatrix = _test_misc_clone(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.misc.createClone<ArrayMatrix>(),
);
