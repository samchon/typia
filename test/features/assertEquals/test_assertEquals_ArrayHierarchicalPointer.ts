import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_assertEquals_ArrayHierarchicalPointer = _test_assertEquals(
    "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)((input) =>
    typia.assertEquals<ArrayHierarchicalPointer>(input),
);
