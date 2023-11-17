import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_createAssertEquals_ArrayHierarchical = _test_assertEquals(
  "ArrayHierarchical",
)<ArrayHierarchical>(ArrayHierarchical)(
  typia.createAssertEquals<ArrayHierarchical>(),
);
