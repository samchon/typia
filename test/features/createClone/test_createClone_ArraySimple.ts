import typia from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ArraySimple = _test_clone(
    "ArraySimple",
    ArraySimple.generate,
    typia.createClone<ArraySimple>(),
);
