import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createIs_ArrayMatrix = _test_is(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.createIs<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
