import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_createClone_ArraySimple = _test_clone(
    "ArraySimple",
    ArraySimple.generate,
    typia.createClone<ArraySimple>(),
);
