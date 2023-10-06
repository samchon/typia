import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_misc_assertClone_ArrayHierarchical = _test_misc_assertClone(
    "ArrayHierarchical",
)<ArrayHierarchical>(ArrayHierarchical)((input) =>
    typia.misc.assertClone<ArrayHierarchical>(input),
);
