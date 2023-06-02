import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createAssertEquals_ArrayMatrix = _test_assertEquals(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.createAssertEquals<ArrayMatrix>(),
);
