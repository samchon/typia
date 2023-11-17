import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_misc_createPrune_ArrayHierarchicalPointer = _test_misc_prune(
  "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
  typia.misc.createPrune<ArrayHierarchicalPointer>(),
);
