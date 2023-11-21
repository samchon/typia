import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_misc_createPrune_ArrayMatrix = _test_misc_prune(
  "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)((input: ArrayMatrix): void => {});
